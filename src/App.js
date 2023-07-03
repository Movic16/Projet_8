import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Home from '../src/Page/Home/Home';
import PageError from '../src/Page/Error/PageError';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element= {<Home />} />
              <Route path="*" element= {<PageError />}/>
          </Routes>
        </BrowserRouter> 
  );
}

export default App;
