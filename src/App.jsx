import './App.css';
import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Layout from './Components/Layyout/Layout';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Details from './Components/Details/Details';
import FirstPicture from './Components/FirstPicture/FirstPicture';
import SecondPicture from './Components/SecondPicture/SecondPicture';
import ThirdPicture from './Components/ThirdPicture/ThirdPicture';
import Chat from './Components/Chat/Chat';



const routers = createBrowserRouter([
    { path:"/", element: <Layout/> ,children:[
      { index:true,element: <Home /> },
      { path: "home",element: <Home /> },
      { path: "furniture3D",element: <Home /> },
      { path: "chat", element :<Chat/>},
      { path: "details", element :<Details/> },
      { path: "firstpicture", element :<FirstPicture/> },
      { path: "secondpicture", element :<SecondPicture/> },
      { path: "thirdpicture", element :<ThirdPicture/> },
      { path : "*", element :<Notfound/> }
    ]},
    
])



export default function App() {
  return <>
  
  <RouterProvider router={routers}/>
  
  </>
}



