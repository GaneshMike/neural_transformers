import { NavLink } from 'react-router-dom';
import './header.scss'

function Header() {
    return (
        <div className="transformers-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img src={require('../../assets/logo.jpg')} className="logo" alt="Neural Transformers AI" />
                        <span className="logo-title">Neural Transformers AI</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">                
                            <li className="nav-item"><NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink></li>   
                            <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>                            
                            <li className="nav-item"><NavLink to="/courses" className="nav-link">Courses</NavLink></li>
                            <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>    
                            <li className="nav-item"><NavLink to="/products" className="nav-link">Products</NavLink></li>  
                            <li className="nav-item"><NavLink to="/contactus" className="nav-link">Contact</NavLink></li>
                            <li className="nav-item"><button className='transformers-register btn' onClick={() => goToRegister()}>Register</button></li>                           
                        </ul>                        
                    </div>
                </div>
            </nav>
        </div>
    )

    function goToRegister() {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSepkEbn49yNjmrggwbAQSjxBtAWPKDNTICRFsqIEeZDspxqWw/viewform', "_blank", "noreferrer")
    }
}

export default Header;