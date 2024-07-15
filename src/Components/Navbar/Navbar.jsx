import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar({userData,logOut}) {
  return<>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-transparent"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="home"><h3>Noxe</h3 ></Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {userData?<ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="home" aria-current="page">Home
                  <span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="tvshow">Tvshow</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="people">people</Link>
              </li>
            
            
            </ul>:''}
         
                 <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                 {userData?<>
                  <li className="nav-item d-flex align-items-center">
                     <i className="fab mx-2 fa-facebook" ></i>
                     <i className="fab mx-2 fa-twitter" ></i>
                     <i className="fab mx-2 fa-instagram" ></i>
                     <i className="fab mx-2 fa-soundcloud" ></i>
      
                   </li>
                 <li className="nav-item">
                     <Link onClick={logOut} className="nav-link" to="">Logout</Link>
                   </li>
                 
                 
                 </>:<>
                 <li className="nav-item">
                     <Link className="nav-link" to="login">Login</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link" to="/">Register</Link>
                   </li>


                 </>}

 
              
                 
                 </ul>
        
       
          
          </div>
        </div>
      </nav>
      
    </>
  
}
