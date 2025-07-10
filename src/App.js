
import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Workouts from './Components/WorkoutsComponents/Workouts';

function App() {
  return (
    <div className="App">
      <div className="block">
        <AllCategories />
        <Cart />
      </div>
      <div className="block">
        <Workouts />
      </div>
    </div>
  );
}

export default App;
