import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import TodoStore from "./TodoStore";
import Appp from './Appp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={TodoStore}>
    <Appp />
  </Provider>,
  </StrictMode>
);


