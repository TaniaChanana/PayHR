import React, { useState } from 'react';
import styles from './Header.module.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import logo from '../../images/logo.PNG';
import { Link as Lik, animateScroll as scroll } from "react-scroll";
function Header() {
  
  const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <>
        

<nav class={`navbar navbar-expand-lg navbar-light mb-2 bg-white ${styles["navbar1"]}`}>
<div className={`d-flex align-items-center justify-content-center ${styles["header-nav-container"]}`}>

  <Link  to="/" class="navbar-brand">
    <img src={logo} class="navbar-brand-img" id={styles["logo-img"]} alt="logo" />
  </Link>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarCollapse">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fe fe-x"></i>
    </button>


    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        {(<Lik to="/" class={`nav-link ${styles["nav-link"]} ${splitLocation[1] === "" ? styles["active"] : ""}`} id="navbarLandings" >
          Home
        </Lik>)}
      </li>
      <li class="nav-item">
        {(<Lik to="about" class={`nav-link ${styles["nav-link"]}`}>
          About
        </Lik>)}
      </li>
      <li class="nav-item">
        {(<Lik to="services" class={`nav-link ${styles["nav-link"]} ${splitLocation[1] === "services" ? styles["active"] : ""}`} id="navbarLandings" >
         Services
        </Lik>)}
      </li>

      
      <li class="nav-item">
       { <Link to="/holidays" class={`nav-link ${styles["nav-link"]} ${splitLocation[1] === "holidays" ? styles["active"] : ""}`} id="navbarDocumentation" >
          View Holidays
        </Link>}

      </li>

      <li class="nav-item">
       { <Link to="/birthday" class={`nav-link ${styles["nav-link"]} ${splitLocation[1] === "birthday" ? styles["active"] : ""}`} id="navbarDocumentation" >
          View Birthdays
        </Link>}

      </li>

      <li class="nav-item">
       { <Link to="/workAnniverseries" class={`nav-link ${styles["nav-link"]} ${splitLocation[1] === "workAnniverseries" ? styles["active"] : ""}`} id="navbarDocumentation" >
          View Work Anniverseries
        </Link>}

      </li>

      <li class="nav-item">
       { <Link to="/salary" class={`nav-link ${styles["nav-link"]} ${splitLocation[1] === "salary" ? styles["active"] : ""}`} id="navbarDocumentation" >
          View Salary
        </Link>}

      </li>

      <li class="nav-item">
       { (<Lik to="contact" class={`nav-link ${styles["nav-link"]} ${splitLocation[1] === "contact" ? styles["active"] : ""}`} id="navbarAccount">
          Contact
        </Lik>)}
        
      </li>

    </ul>

   {(<div className={styles['header-butns']}>
    
    <Link to="/AddEmployee" class="navbar-btn btn btn-sm btn-primary lift ms-auto mx-2" >
      Add New Employee
    </Link>

    <Link to="/ViewEmployee" class="navbar-btn btn btn-sm btn-primary lift ms-auto mx-2" >
      View Employees
    </Link>

    </div>) 
    }

    

  </div>

</div>
</nav>
</>
    )
}

export default Header
