import './App.css';
import {About, Home, Projects }from './Pages/index';
import {Footer, Header} from './Section/index'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';


function App() {
  return (
  <Router>
    <>
      <Header />
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      <Footer/>
    </>
  </Router>
  );
}

export default App;
