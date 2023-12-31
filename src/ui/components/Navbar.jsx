import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () =>{
        navigate("/login", { 
            replace: true,
        });
    }


    return (


        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? "active": "" }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? "active": "" }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? "active": "" }` }
                        to="/search-page"
                    >
                        SearchPages
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? "active": "" }` }
                        to="/heroe"
                    >
                        Heroe
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">

                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        onClick={onLogout}
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? "active": "" }` }
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>

            </div>
        </nav>
    )
}