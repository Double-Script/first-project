// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import "./Allprod.css";
// import axios from "axios";
// export default function AllProducts() {
//   let navigate = useNavigate();
//   const [data, setData] = useState([]);

//   function temp() {
//     axios
//       .get("https://65a7b4b294c2c5762da7596a.mockapi.io/CRUD")
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       });
//   }

//   useEffect(() => {
//     temp();
//   }, []);
//   function backbtn(e) {
//     e.preventDefault();
//     navigate("/admin");
//   }


//   function handleDelete(e, id) {
//     e.preventDefault();
//     // alert(id);
//     axios.delete("https://65a7b4b294c2c5762da7596a.mockapi.io/CRUD/" + id)
//     .then((res)=>{
//       console.log(res.data);
//       temp();
//     })
//   }

//   return (
//     <div>
//       <div className="main-container">
//         <button onClick={(e) => backbtn(e)} className="back-btn">
//           <i class="fa-solid fa-arrow-left"></i>
//         </button>

//         <table className="table  table-striped">
//           <thead>
//             <tr>
//               <th scope="col">No</th>
//               <th scope="col">Image</th>
//               <th scope="col">Title</th>
//               <th scope="col">Category</th>
//               <th scope="col">Price</th>
//               <th scope="col">Rating</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((eachItem, index) => {
//               return (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <th scope="row">
//                     <img src={eachItem.image} alt="" />
//                   </th>
//                   <td style={{ textAlign: "left" }}>{eachItem.title}</td>
//                   <td>{eachItem.catagory}</td>
//                   <td>{eachItem.price}</td>
//                   <td>{eachItem.rating}</td>
//                   <td>

//                     <button className="btn btn-success">Edit</button>


//                     <button
//                       onClick={(e) => {
//                         handleDelete(e, eachItem.id);
//                       }}
//                       className="btn btn-danger"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import "./Allprod.css";
// import axios from "axios";
// export default function AllProducts() {
//   let navigate = useNavigate();
//   const [data, setData] = useState([]);

//   function temp() {
//     axios
//       .get("https://65a7b4b294c2c5762da7596a.mockapi.io/CRUD")
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       });
//   }

//   useEffect(() => {
//     temp();
//   }, []);
//   function backbtn(e) {
//     e.preventDefault();
//     navigate("/admin");
//   }

//   function handleDelete(e, id) {
//     e.preventDefault();
//     // alert(id);
//     axios.delete("https://65a7b4b294c2c5762da7596a.mockapi.io/CRUD/" + id)
//     .then((res)=>{
//       console.log(res.data);
//       temp();
//     })
//   }

//   return (
//     <div>
//       <div className="main-container">
//         <button onClick={(e) => backbtn(e)} className="back-btn">
//           <i class="fa-solid fa-arrow-left"></i>
//         </button>

//         <table className="table  table-striped">
//           <thead>
//             <tr>
//               <th scope="col">No</th>
//               <th scope="col">Image</th>
//               <th scope="col">Title</th>
//               <th scope="col">Category</th>
//               <th scope="col">Price</th>
//               <th scope="col">Rating</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((eachItem, index) => {
//               return (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <th scope="row">
//                     <img style={{width:'10%'}} src={eachItem.image} alt="" />
//                   </th>
//                   <td style={{ textAlign: "left" }}>{eachItem.title}</td>
//                   <td>{eachItem.catagory}</td>
//                   <td>{eachItem.price}</td>
//                   <td>{eachItem.rating}</td>
//                   <td>
//                     <Link to={"/AddProduct2/" + eachItem.id}>
//                     <button className="btn btn-success">Edit</button>
//                     </Link>
//                     <button
//                       onClick={(e) => {
//                         handleDelete(e, eachItem.id);
//                       }}
//                       className="btn btn-danger"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }






import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AllProducts() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");

  function temp() {
    let apiUrl = "https://65a7b4b294c2c5762da7596a.mockapi.io/CRUD";

    if (categoryFilter) {
      apiUrl += `?catagory=${categoryFilter}`;
    }

    axios.get(apiUrl).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }

  useEffect(() => {
    temp();
  }, [categoryFilter]); // Trigger the effect when the category filter changes

  function backbtn(e) {
    e.preventDefault();
    navigate("/admin");
  }

  function handleDelete(e, id) {
    e.preventDefault();
    axios.delete("https://65a7b4b294c2c5762da7596a.mockapi.io/CRUD/" + id).then((res) => {
      console.log(res.data);
      temp();
    });
  }

  return (
    <div>
      <div className="main-container">
        <button onClick={(e) => backbtn(e)} className="back-btn">
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <label>
          Filter by Category:
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Category1">Category 1</option>
            <option value="Category2">Category 2</option>
            {/* Add more options as needed */}
          </select>
        </label>

        
          {/* ... rest of your table code */}<table className="table  table-striped">
           <thead>
             <tr>
               <th scope="col">No</th>
               <th scope="col">Image</th>
               <th scope="col">Title</th>
               <th scope="col">Category</th>
               <th scope="col">Price</th>
               <th scope="col">Rating</th>
               <th scope="col">Action</th>
             </tr>
           </thead>
           <tbody>
             {data.map((eachItem, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img style={{width:'10%'}} src={eachItem.image} alt="" />
                  </th>
                  <td style={{ textAlign: "left" }}>{eachItem.title}</td>
                  <td>{eachItem.catagory}</td>
                  <td>{eachItem.price}</td>
                  <td>{eachItem.rating}</td>
                  <td>
                    <Link to={"/AddProduct2/" + eachItem.id}>
                    <button className="btn btn-success">Edit</button>
                    </Link>
                    <button
                      onClick={(e) => {
                        handleDelete(e, eachItem.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}
