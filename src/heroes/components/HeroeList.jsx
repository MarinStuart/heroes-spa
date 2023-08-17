
import { getHeroeByPublisher } from "../helpers/getHeroeByPublisher";
import { HeroeCard } from "./HeroeCard";


export const HeroeList = (  {publisher}  ) => {

    const listaHeroes = getHeroeByPublisher( publisher );

  return (
    <>

     <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                listaHeroes.map( hero => (
                    <HeroeCard 
                    key={hero.id}
                    { ...hero }
                     />
                ))
            }
     </div>
    </>
  )
}
