import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from "react-router-dom";
import RootLayout from "./components/Layouts/RootLayout";
import Shop from "./pages/Shop";
import About from './pages/About';
import Contacts from './pages/Contacts';
import Journal from './pages/Journal';
import LogInPage from "./pages/LogInPage";
import SignUp from "./pages/SignUp";
import Chart from "./pages/chart";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
         <Route path="/" element={<Home/>}/>
         <Route path="/shop" element={<Shop/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/Contacts" element={<Contacts/>}/>
         <Route path="/Journal" element={<Journal/>}/>
         <Route path="/LogInPage" element={<LogInPage/>}/>
         <Route path="/SignUp" element={<SignUp/>}/>
         <Route path="/Chart" element={<Chart/>}/>
         <Route path="/Product/:id" element={<SingleProduct/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
