import { Outlet, Link as NavLink } from "react-router-dom";
import logo from "../assets/images/m-letter.webp"
const Layout = () => {
    return(
        <>  
            <div className="container-fluid bg-dark">
                <nav className="navbar navbar-expand-lg">
                    <img src= {logo} alt="m-logo" width="70" height="50" className="logo-img custom-nav"/>
                    <NavLink to="/" className="nav-item nav-link px-4 badge bg-secondary rounded-pill custom-nav"> <strong>Home</strong></NavLink>
                        
                    <NavLink to="projects" className="nav-item nav-link px-4 badge bg-secondary rounded-pill custom-nav"> <strong>Projects</strong> </NavLink>

                    <NavLink to="contact" className="nav-item nav-link px-4 badge bg-secondary rounded-pill custom-nav"> <strong>Contact</strong> </NavLink>
                </nav> 
            </div>
            <Outlet/>
        </>
    )
}

export default Layout;