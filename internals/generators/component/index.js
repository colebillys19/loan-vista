/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [
      {
        abortOnFail: true,
        path: '../../app/components/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        type: 'add',
      },
      {
        abortOnFail: true,
        path: '../../app/components/{{properCase name}}/tests/index.test.js',
        templateFile: './component/test.js.hbs',
        type: 'add',
      },
    ];

    // If the user wants i18n messages
    if (data.wantMessages) {
      actions.push({
        abortOnFail: true,
        path: '../../app/components/{{properCase name}}/messages.js',
        templateFile: './component/messages.js.hbs',
        type: 'add',
      });
    }

    // If the user wants Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        abortOnFail: true,
        path: '../../app/components/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        type: 'add',
      });
    }

    actions.push({
      path: '/components/',
      type: 'prettify',
    });

    return actions;
  },
  description: 'Add an unconnected component',
  prompts: [
    {
      default: 'Button',
      message: 'What should it be called?',
      name: 'name',
      type: 'input',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
      name: 'memo',
      type: 'confirm',
    },
    {
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
      name: 'wantMessages',
      type: 'confirm',
    },
    {
      default: false,
      message: 'Do you want to load the component asynchronously?',
      name: 'wantLoadable',
      type: 'confirm',
    },
  ],
};
