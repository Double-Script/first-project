import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel'
import Content from '../Content'
import axios from "axios";
import { Link } from 'react-router-dom';
export default function Home() {
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // New state for controlling alert visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // New state for selected product

  function temp() {
    axios
      .get("https://65a7b4b294c2c5762da7596a.mockapi.io/CRUD")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  useEffect(() => {
    temp();
  }, []);

  const handleAddToCart = (product) => {
    setSelectedProduct(product); // Set the selected product for alert message
    setShowAlert(true); // Show the alert
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Hide the alert
    setSelectedProduct(null); // Clear selected product
  };
  
  return (
    <div>
      <Carousel />
      <br />
      
      <h2 style={{textAlign:'center'}}>CATEGORIES</h2>
      

      <div className='container-fluid'>
            <div className='row'>

      <div className="col-lg-4">
      <Link to='../Content'>
      <div class="card bg-dark text-white">
  <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small_Tile_3_pSQ1gfl.jpg?format=webp&w=480&dpr=1.3" class="card-img" alt="..."/>
  <div class="card-img-overlay">  
    {/* <h5 class="card-title">Card title</h5>
  </Link>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
  </Link>
</div>
<div className="col-lg-4">
<Link to='../Content2'>
      <div class="card bg-dark text-white">
  <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small_Tile_1_rEmO52N.jpg?format=webp&w=480&dpr=1.3" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
</Link>
</div>

<div className="col-lg-4">
  <Link to='../Content3'>
      <div class="card bg-dark text-white">
  <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small_Tile_4_nUJb76O.jpg?format=webp&w=480&dpr=1.3" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
  </Link>
</div>

</div>
</div>
<br />
<h2 style={{textAlign:'center'}}>ALL PRODUCTS</h2>


      {/* <Content /> */}



      <div>
      <div className='container-fluid'>
        <div className='row'>
            {data.map((eachItem) => {
              return (
                // <tr key={index}>
                //   <th scope="row">{index + 1}</th>
                //   <th scope="row">
                //     <img style={{width:'10%'}} src={eachItem.image} alt="" />
                //   </th>

                  <div className="col-lg-3">
      <div class="card" style={{width: "50px;"}}>
  <div class="bg-image hover-overlay" data-lgb-ripple-init data-lgb-ripple-color="light">
    <img src={eachItem.image} class="img-fluid" style={{width: "50px;"}} />
    <a href="#!">
      <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15);"}}></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">{eachItem.title}</h5>
    <p class="card-text">{eachItem.price}</p>
    {/* <a href="#!" class="btn btn-primary" data-lgb-ripple-init>Add To Cart</a> */}
    <button className="btn btn-primary" onClick={() => handleAddToCart(eachItem)}>
                    Add To Cart
                  </button>
  </div>
</div>
</div>



//   <td style={{ textAlign: "left" }}>{eachItem.title}</td>
//   <td>{eachItem.catagory}</td>
//   <td>{eachItem.price}</td>
//   <td>{eachItem.rating}</td>

// </tr>
);
})}</div>
</div>

          </div>



 {/* Custom Alert Modal */}
 {showAlert && (
        <div className="alert-overlay">
          <div className="alert-box">
            <p><strong>{selectedProduct?.title}</strong> added to your cart!</p>
            <p>Would you like to view your cart or continue shopping?</p>
            <button className="btn btn-success" onClick={handleCloseAlert}>Continue Shopping</button>
          </div>
        </div>
      )}

      {/* CSS for alert overlay */}
      <style jsx>{`
        .alert-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .alert-box {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>



    </div>
  );
       
}


