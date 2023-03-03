import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from './components/rootPage/RootPage';
import ModalWindow from './components/modalWindow/ModalWindow';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootPage />} />
        <Route path='/:imageId' element={<ModalWindow />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
