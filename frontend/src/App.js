import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Chatspage from './Pages/Chatspage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Homepage} exact/>
        <Route path='/chats' Component={Chatspage}/>
      </Routes>
    </div>
  );
}

export default App;
