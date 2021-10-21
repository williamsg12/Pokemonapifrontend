import { Route } from 'react-router';
import './App.css';
import NavBars from './Components/NavBar/NavBars';
import Home from './Components/Home/Home'
import Trainer from './Components/Trainers/Trainer'
import Pokemon from './Components/Pokemon/Pokemon'

function App() {
  return (
		<div className='App'>
			<NavBars />

			<Route path='/home' exact component={Home} />
			<Route path='/trainer'exact component={Trainer} />
			<Route path='/pokemon'exact component={Pokemon} />
      
		</div>
	);
}

export default App;
