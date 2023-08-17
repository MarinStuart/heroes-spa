import {  useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroeById";


export const HeroePages = (  ) => {

  const {id} = useParams();

  const heroe = getHeroeById(id);

  const Navigate = useNavigate();

  const onNavigateBack = ( ) =>{
    Navigate(-1);
  }


  if( !heroe ){
    return <Navigate to={"/marvel"}/>
  }
 

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
            <img 
            src={`/assets/heroes/${ id }.jpg`}
            alt={ heroe.superhero }
            className="img-thumbnail"
            />
            <hr />
            <h1>
            { heroe.superhero }
            </h1>
            <button 
            onClick={ onNavigateBack }
            className="btn btn-primary">
              Regresar
            </button>
            
        </div>
      </div>
    </>
  )
}
