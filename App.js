

import React from 'react';

import AppNavigation from './navigation/appNavigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';



function App() {


  return (
    <Provider store={store}>
       <AppNavigation />
    </Provider> 
  
  );
}


export default App;
