import './App.css';
import Feature from './Components/feature';
import HomeScreen from './Components/homescreen';
import NavbarScreen from './Components/navbar';
import Offer from './Components/offer';

function App() {
  return (
    <div className="App">
      <NavbarScreen />
      <HomeScreen />
      <Feature />
      <Offer />
    </div>
  );
}

export default App;
