import { useState, useEffect } from 'react'
import Header from './components/Header'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Store from './pages/Store'
import Login from './connect/Login'
import SignUp from './connect/SignUp'
import CreateStore from './connect/CreateStore'
import AddItems from './StoreComp/AddItems'
import Requests from './requests/Requests'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <BrowserRouter>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Routes>
        <Route path='/' element={<Landing isDark={isDark} />}></Route>
        <Route path='/login' element={<Login isDark={isDark} />}></Route>
        <Route path='/signup' element={<SignUp isDark={isDark} />}></Route>
        <Route path='/createstore' element={<CreateStore isDark={isDark} />}></Route>
        <Route path='/store' element={<Store isDark={isDark} />}></Route>
        <Route path='/additems' element={<AddItems />}></Route>
        <Route path='/requests' element={<Requests />}></Route>

      </Routes>

    </BrowserRouter>
  )
}
