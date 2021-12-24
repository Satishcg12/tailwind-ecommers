import './App.css';
import Footers from './components/Footers';
import NavBar from './components/NavBar';
import Routing from './Routing'
function App() {
  return (
    <>
    <NavBar/>
    <div className='min-h-[85vh]'>
    <Routing/>

    </div>
    <Footers/>
    </>
  );
}

export default App;
