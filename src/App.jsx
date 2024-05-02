import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import { LoginPage } from './pages/Loginpage';
import { SignUpPage } from './pages/SIgnUpPage';
import { textPage } from './pages/TextPage';

function App() {
  return (
    <Routes>
      <Route index element={<Homepage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/SIgnUpPage' element={<SignUpPage/>}/>
      <Route path='/textPage' element={<textPage/>}/>
    </Routes>
  )
}

export default App
