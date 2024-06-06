import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import { LoginPage } from './pages/Loginpage';
import { SignUpPage } from './pages/SIgnUpPage';
import { TextPage } from './pages/TextPage';
import { Parent } from './pages/Teaching';

function App() {
  return (
    <Routes>
      <Route index element={<Homepage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/SIgnUpPage' element={<SignUpPage/>}/>
      <Route path='/textpage' element={<TextPage/>}/>
      <Route path='/test' element={<Parent/>}/>
    </Routes>
  )
}

export default App
