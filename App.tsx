import React from 'react';
import { Provider } from 'react-redux';
import NavigatorContainer from './src/Navogators/NavigatorContainer/NavigatorContainer';
import store from './src/Redux/Store/Store';
import BookListContainer from './src/ReadBook/BookListContainer';

const App: React.FC = () => (
  // <Provider store={store}>
  //   <NavigatorContainer />
  // </Provider>
  <BookListContainer />
);

export default App;
