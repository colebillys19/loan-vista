/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/index.js',
        templateFile: './container/index.js.hbs',
        type: 'add',
      },
      {
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/tests/index.test.js',
        templateFile: './container/test.js.hbs',
        type: 'add',
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/messages.js',
        templateFile: './container/messages.js.hbs',
        type: 'add',
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the emailsesponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/actions.js',
        templateFile: './container/actions.js.hbs',
        type: 'add',
      });
      actions.push({
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/tests/actions.test.js',
        templateFile: './container/actions.test.js.hbs',
        type: 'add',
      });

      // Constants
      actions.push({
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        type: 'add',
      });

      // Selectors
      actions.push({
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/selectors.js',
        templateFile: './container/selectors.js.hbs',
        type: 'add',
      });
      actions.push({
        abortOnFail: true,
        path:
          '../../app/containers/{{properCase name}}/tests/selectors.test.js',
        templateFile: './container/selectors.test.js.hbs',
        type: 'add',
      });

      // Reducer
      actions.push({
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        type: 'add',
      });
      actions.push({
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/tests/reducer.test.js',
        templateFile: './container/reducer.test.js.hbs',
        type: 'add',
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/saga.js',
        templateFile: './container/saga.js.hbs',
        type: 'add',
      });
      actions.push({
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/tests/saga.test.js',
        templateFile: './container/saga.test.js.hbs',
        type: 'add',
      });
    }

    if (data.wantLoadable) {
      actions.push({
        abortOnFail: true,
        path: '../../app/containers/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        type: 'add',
      });
    }

    actions.push({
      path: '/containers/',
      type: 'prettify',
    });

    return actions;
  },
  description: 'Add a container component',
  prompts: [
    {
      default: 'Form',
      message: 'What should it be called?',
      name: 'name',
      type: 'input',
      validate: value => {
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
      default: false,
      message: 'Do you want headers?',
      name: 'wantHeaders',
      type: 'confirm',
    },
    {
      default: true,
      message:
        'Do you want an actions/constants/selectors/reducer tuple for this container?',
      name: 'wantActionsAndReducer',
      type: 'confirm',
    },
    {
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
      name: 'wantSaga',
      type: 'confirm',
    },
    {
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
      name: 'wantMessages',
      type: 'confirm',
    },
    {
      default: true,
      message: 'Do you want to load resources asynchronously?',
      name: 'wantLoadable',
      type: 'confirm',
    },
  ],
};
