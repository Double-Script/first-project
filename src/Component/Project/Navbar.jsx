import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='responce'>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */}



{/* @navbar height 50px */}
     {/* <!-- Navbar --> */}
    {/* <nav class="navbar navbar-expand-lg navbar-dark bg-color-danger"> */}
    <div className='py-0'>
    <nav class="navbar navbar-expand-lg navbar-dark"  style={{backgroundImage:'linear-gradient(to right,#FF1717,#C42525'}} >
      {/* <!-- Container wrapper -->  */}
      <div class="container">
        {/* <!-- Navbar brand --> */}
        <a class="navbar-brand" href="#"><img id="MDB-logo" src="https://icon-library.com/images/clothing-icon-png/clothing-icon-png-4.jpg" alt="MDB Logo" draggable="false" height="30" /></a>
    
        {/* <!-- Toggle button --> */}
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
    
        
    <div className='input-group'>
          <form class="d-flex align-items-center w-50 h-30 form-search">

              <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
            
            <a href="#!" class="text-white"><i class="fas fa-search ps-3"></i></a>
          </form>
          </div>
          <ul class="navbar-nav ms-3">
            <li class="nav-item me-3">
            {/* <FontAwesomeIcon icon={faCartShopping} style={{color: "#057045",}} /> */}
            
              <a class="nav-link d-flex align-items-center" href="#!"><i class="fa-regular fa-address-book"></i>Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center me-3" href="#!">
              <i class="fa-solid fa-heart" style={{color: "#cbced2;"}}></i> Like </a>
            </li>
            <li class="nav-item" style={{ width: '65px' }}>
              <Link to='/Admin'>
              <a class="nav-link d-flex align-items-center" href="#!">Sign In</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- Collapsible wrapper -->  */}
      
      {/* <!-- Container wrapper --> */}
    </nav>
    </div>
    {/* <!-- Navbar --> */}

    
<div className='secondnav'>
    <ul class="nav nav-tabs">
      <li>
  <Link to='/' class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a></Link></li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Catagories
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to='/Content'>
          <a class="dropdown-item" href="#">oversized t-shirt</a>
          </Link>
          <Link to='/Content2'>
          <a class="dropdown-item" href="#">oversized full sleeve</a>
          </Link>
          <Link to='/Content3'>
          <a class="dropdown-item" href="#">t-shirt</a>
          </Link>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

  {/* <li class="nav-item">
    <a class="nav-link" href="#">Bestsellers</a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li> */}

  {/* <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li> */}

</div>

</div>
  )
}
