import React, { useEffect, useState } from 'react'
import './Home.css';
import Carousel from './Carousel';
import axios from "axios";
import { Link } from 'react-router-dom';
export default function Content() {
  const [data, setData] = useState([]);

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
  


  return (
    <div>
<br />



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
    <a href="#!" class="btn btn-primary" data-lgb-ripple-init>Button</a>
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






       

    </div>




  )
}

