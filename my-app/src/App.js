
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPageContainer from './components/rootPage/RootPageContainer';
import ModalWindowContainer from './components/modalWindow/ModalWindowContainer';
import s from './App.module.css';


const App = ({ store }) => {

  return (
    <BrowserRouter>
      <div className={s.contentWrapper}>
        
          <Routes>

            <Route path='/' element={<RootPageContainer/>} />
            <Route path='/:imageId' element={<ModalWindowContainer />} />
          
          </Routes>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
