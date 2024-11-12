import React, { useEffect } from 'react'
import './AdminStyle.css'
import { Link, useNavigate } from 'react-router-dom';
// import AllProduct from './Component/Project/AllProduct';

export default function Admin() 

{

 const navigate = useNavigate()

  useEffect(()=>{
    const data = localStorage.getItem('user');

    // console.log(data);

    if(data === null) {
      navigate('/login')
      // window.location.href = "/loginpage"
    }else{
      navigate('/admin')
    }
  },[])

  //clear
  function clr(e){
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
    alert("Login Again For Admin Access...");
  }
  //Add product is used to add data in database
  function add(e){
    e.preventDefault();
    navigate('/AddProduct');
  }
  function AllProd(e){
    e.preventDefault();
    navigate('/Products');
  }


  return (
    <div>
    <div className="main">
      <div className='left'>
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <a
          href="#"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fa-solid fa-house-chimney me-3"></i><span>Dashboard</span>
        </a>
        <a onClick={(e)=>AllProd(e)} href="" className="list-group-item list-group-item-action py-2 ripple">
        <i className="fa-solid fa-wallet me-3"></i><span>Product</span>
        </a>
      
        <a onClick={(e)=>add(e)} href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fa-solid fa-plus me-3"></i><span>Add Product</span></a
        >
  
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fa-solid fa-truck-fast me-3"></i><span>Order</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
        <i className="fa-solid fa-list me-3"></i><span>Sidebar</span>
        </a>
        <a className="list-group-item list-group-item-action py-2 ripple" onClick={(e)=>clr(e)}
          ><i  className="fa-solid fa-right-from-bracket me-3"></i><span>LogOut</span></a
        >
        
       
      </div>
      </div>
    </div>
    <div className="right">
    <div className='R1'>
        <div>
        <i className="fa-solid fa-user"></i>
        </div>
        <div>
          <hr />
        <a href="#">Users</a>
        </div>
    </div>
    <div className='R2'>
        <div>
        <i className="fa-solid fa-briefcase"></i>
        </div>
        <div>
        <hr/>
        <Link to={"/AllProduct"}>
        <a >Product</a>
        </Link>
        </div>
    </div>
    <div className='R3'>
        <div>
        <i className="fa-brands fa-first-order-alt"></i>
        </div>
        <div>
        <hr />
        <a href="#">Order</a>
        </div>
    </div>



    </div>
    </div>

    </div>
  );
}