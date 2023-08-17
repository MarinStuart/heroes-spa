import {  Route, Routes } from "react-router-dom"
import { LoginPages } from "../auth/pages/LoginPages"
import {  HeroesRoutes } from "../heroes"



export const AppRouter = () => {
  return (
    <>

        <Routes>
             
            <Route path="login" element={ <LoginPages/> }></Route>

            <Route path="/*" element={ <HeroesRoutes/> }></Route>

        </Routes>
    </>
  )
} 
