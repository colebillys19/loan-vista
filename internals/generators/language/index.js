/**
 * Language Generator
 */
const fs = require('fs');
const { exec } = require('child_process');

function languageIsSupported(language) {
  try {
    fs.accessSync(`app/translations/${language}.json`, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = {
  actions: ({ test }) => {
    const actions = [];

    if (test) {
      // backup files that will be modified so we can restore them
      actions.push({
        file: 'i18n.js',
        path: '../../app',
        type: 'backup',
      });

      actions.push({
        file: 'app.js',
        path: '../../app',
        type: 'backup',
      });
    }

    actions.push({
      path: '../../app/i18n.js',
      pattern: /(const ..LocaleData = require\('react-intl\/locale-data\/..'\);\n)+/g,
      templateFile: './language/intl-locale-data.hbs',
      type: 'modify',
    });
    actions.push({
      path: '../../app/i18n.js',
      pattern: /(\s+'[a-z]+',\n)(?!.*\s+'[a-z]+',)/g,
      templateFile: './language/app-locale.hbs',
      type: 'modify',
    });
    actions.push({
      path: '../../app/i18n.js',
      pattern: /(const ..TranslationMessages = require\('\.\/translations\/..\.json'\);\n)(?!const ..TranslationMessages = require\('\.\/translations\/..\.json'\);\n)/g,
      templateFile: './language/translation-messages.hbs',
      type: 'modify',
    });
    actions.push({
      path: '../../app/i18n.js',
      pattern: /(addLocaleData\([a-z]+LocaleData\);\n)(?!.*addLocaleData\([a-z]+LocaleData\);)/g,
      templateFile: './language/add-locale-data.hbs',
      type: 'modify',
    });
    actions.push({
      path: '../../app/i18n.js',
      pattern: /([a-z]+:\sformatTranslationMessages\('[a-z]+',\s[a-z]+TranslationMessages\),\n)(?!.*[a-z]+:\sformatTranslationMessages\('[a-z]+',\s[a-z]+TranslationMessages\),)/g,
      templateFile: './language/format-translation-messages.hbs',
      type: 'modify',
    });
    actions.push({
      abortOnFail: true,
      path: '../../app/translations/{{language}}.json',
      templateFile: './language/translations-json.hbs',
      type: 'add',
    });
    actions.push({
      path: '../../app/app.js',
      pattern: /(import\('intl\/locale-data\/jsonp\/[a-z]+\.js'\),\n)(?!.*import\('intl\/locale-data\/jsonp\/[a-z]+\.js'\),)/g,
      templateFile: './language/polyfill-intl-locale.hbs',
      type: 'modify',
    });

    if (!test) {
      actions.push(() => {
        const cmd = 'npm run extract-intl';
        exec(cmd, (err, result) => {
          if (err) throw err;
          process.stdout.write(result);
        });
        return 'modify translation messages';
      });
    }

    return actions;
  },
  description: 'Add a language',
  prompts: [
    {
      default: 'fr',
      message:
        'What is the language you want to add i18n support for (e.g. "fr", "de")?',
      name: 'language',
      type: 'input',
      validate: value => {
        if (/.+/.test(value) && value.length === 2) {
          return languageIsSupported(value)
            ? `The language "${value}" is already supported.`
            : true;
        }

        return '2 character language specifier is required';
      },
    },
  ],
};
