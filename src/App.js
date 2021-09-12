
import './App.css';

import People from './components/Peoples';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <People/>
    </Provider>
  );
}

export default App;
