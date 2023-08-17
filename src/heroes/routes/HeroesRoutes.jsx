import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroePages, MarvelPages, SearchPages } from "../pages"


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
        <Routes>
            <Route path="marvel" element={ <MarvelPages/> }></Route>
            <Route path="dc" element={ <DcPage/> }></Route>
            <Route path="search-page" element={ <SearchPages/> }></Route>
            <Route path="heroe/:id" element={ <HeroePages/> }></Route>
 
            
            <Route path="/" element={ <Navigate to="marvel"/> }></Route>

        </Routes>
        </div>
    </>
  )
}
