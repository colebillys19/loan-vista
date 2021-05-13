// /**
//  * app.js
//  * @description ...
//  */

// // Needed for redux-saga es6 generator support
// import '@babel/polyfill';

// // Import all the third party stuff
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import history from 'utils/history';
// import 'sanitize.css/sanitize.css';
// import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';

// // Import root app
// import App from 'containers/App';

// // Load the favicon and the .htaccess file
// /* eslint-disable import/no-unresolved, import/extensions */
// import '!file-loader?name=[name].[ext]!./images/favicon.ico';
// import 'file-loader?name=.htaccess!./.htaccess';
// /* eslint-enable import/no-unresolved, import/extensions */

// import configureStore from './configureStore';
// import muiTheme from './muiTheme';

// const initialState = {};
// const store = configureStore(initialState, history);
// const MOUNT_NODE = document.getElementById('app');

// const render = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <StylesProvider injectFirst>
//           <ThemeProvider theme={muiTheme}>
//             <App />
//           </ThemeProvider>
//         </StylesProvider>
//       </ConnectedRouter>
//     </Provider>,
//     MOUNT_NODE,
//   );
// };

// if (module.hot) {
//   module.hot.accept(['containers/App'], () => {
//     ReactDOM.unmountComponentAtNode(MOUNT_NODE);
//     render();
//   });
// }

// render();

// // Install ServiceWorker and AppCache in the end since
// // it's not most important operation and if main code fails,
// // we do not want it installed
// if (process.env.NODE_ENV === 'production') {
//   require('offline-plugin/runtime').install(); // eslint-disable-line global-require
// }

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
import GlobalStyles from 'globalStyles';
import muiTheme from './muiTheme';
import CallsListSandbox from './_CallsListSandbox';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <StylesProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CallsListSandbox />
        <GlobalStyles />
      </ThemeProvider>
    </StylesProvider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
