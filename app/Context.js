import React, { createContext, useState } from 'react';
import T from 'prop-types';

const initialState = { mainError: false, mainLoading: true };

const Context = createContext([{}, () => {}]);

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

ContextProvider.propTypes = { children: T.node.isRequired };

export default Context;
