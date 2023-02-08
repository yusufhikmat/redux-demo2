import CakeContainer from './components/CakeContainer';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/cakes/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
function App() {
  return (
    <Provider  store ={store}>
    <div className="App">
    <CakeContainer />
    
      <HookCakeContainer />
      <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
