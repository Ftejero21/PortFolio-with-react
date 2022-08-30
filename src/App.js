import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';
import Main from './Components/Main';

import RouterPrincipal from './Components/Router/RouterPrincipal';


function App() {
  const [loading , setLoading] = useState(true);


  const cargando = () =>{
    setTimeout (() =>{
      setLoading(false)
    },5000)
  }

  useEffect (() =>{
    cargando();
  },[])

  if(loading){
    return <Loader/>
  }else{
    return <RouterPrincipal/>
  }
}

export default App;
