import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Avia from './components/avia/Avia';
import Info from './components/info/Info';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/avia' element={<Avia/>}/>
        <Route path='/avia/info' element={<Info/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
