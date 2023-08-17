import { Link } from "react-router-dom";

export const HeroeCard = ( {id, superhero} ) => {

    const heroImgUrl = `/assets/heroes/${ id }.jpg`;
  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">

                    <img src={ heroImgUrl } className="card-img" alt={superhero} />

                    <Link to={ `/heroe/${id}`}> Mas... </Link>     
                    

                </div>
            </div>
        </div>
    </div>
  )
}
