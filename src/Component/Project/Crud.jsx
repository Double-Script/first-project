// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// export default function Crud() {

//     const [data, setData] = useState({
//         firstName: "",
//         lastName: "",
//         city: "",
//         qualification: ""
//     });

//     const [newData, setNewData] = useState([]);

//     function handleChange(e) {
//         e.preventDefault()
//         // console.log(e.target.value);
//         setData({ ...data, [e.target.id]: e.target.value })
//         // console.log(data);
//     };

//     function handleSubmit(e) {
//         e.preventDefault()
//         // console.log(data);

//         axios.post("https://63c663fcd307b76967380f55.mockapi.io/crud", data)
//             .then((res) => {
//                 console.log(res.data);
//                 setData({
//                     firstName: "",
//                     lastName: "",
//                     city: "",
//                     qualification: ""
//                 })
//                 loadData();
//             })

//     };


//     function loadData() {
//         axios.get("https://63c663fcd307b76967380f55.mockapi.io/crud")
//             .then((res) => {
//                 console.log(res.data);
//                 setNewData(res.data)
//             })
//     };

//     // loadData();

//     useEffect(() => {
//         loadData();
//     }, []);

//     return (
//         <div>
//             <h1>Crud Operation</h1><br /><br />

//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <form>
//                             <div class="mb-3">
//                                 <label for="exampleInputEmail1" class="form-label">First Name</label>
//                                 <input value={data.firstName} onChange={(e) => handleChange(e)} type="text" class="form-control" id="firstName" aria-describedby="emailHelp" />
//                             </div>
//                             <div class="mb-3">
//                                 <label for="exampleInputPassword1" class="form-label">Last Name</label>
//                                 <input value={data.lastName} onChange={(e) => handleChange(e)} type="text" class="form-control" id="lastName" />
//                             </div>
//                             <div class="mb-3">
//                                 <label for="exampleInputPassword1" class="form-label">City</label>
//                                 <input value={data.city} onChange={(e) => handleChange(e)} type="text" class="form-control" id="city" />
//                             </div>
//                             <div class="mb-3">
//                                 <label for="exampleInputPassword1" class="form-label">Qualification</label>
//                                 <input value={data.qualification} onChange={(e) => handleChange(e)} type="text" class="form-control" id="qualification" />
//                             </div>
//                             <button onClick={(e) => handleSubmit(e)} type="submit" class="btn btn-primary">Submit</button>
//                         </form>
//                     </div>




//                     {/* Table Data */}
//                     <div className="col-lg-6">
//                         <table class="table">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">#</th>
//                                     <th scope="col">First Name</th>
//                                     <th scope="col">Last Name</th>
//                                     <th scope="col">City</th>
//                                     <th scope="col">Qualification</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     newData.map((eachData, i) => {
//                                         return (
//                                             <tr key={i}>
//                                                 <th scope="row">{i + 1}</th>
//                                                 <td>{eachData.firstName}</td>
//                                                 <td>{eachData.lastName}</td>
//                                                 <td>{eachData.city}</td>
//                                                 <td>{eachData.qualification}</td>
//                                             </tr>
//                                         )
//                                     })
//                                 }

//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }