import React, { useEffect, useState } from 'react';
// import './CreateApiStyle.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateApi() {
let navigate = useNavigate();

let {id} = useParams();

    const [data, setData]=useState(
        {
            title:"",
            catagory:"",
            price:"",
            rating:"",
            image:""
        }
    );

useEffect(()=>{
    axios.get("https://65a7b4b294c2c5762da7596a.mockapi.io/CRUD/" + id)
    .then((res)=>{
        console.log(res.data);
        setData({
            title:res.data.title,
          catagory:res.data.catagory,
          price:res.data.price,
          rating:res.data.rating,
          image:res.data.image
          })
    })
}, [])

    function backbtn(e){
        e.preventDefault();
        navigate("/admin");
    }
    function handleChange(e){
            e.preventDefault();
            // console.log(e.target.value);
            setData({...data, [e.target.id]:e.target.value})
            // console.log(data);
    }
    function upload(e){
        e.preventDefault();

        if(id === undefined){
            axios.post("https://65a7b4b294c2c5762da7596a.mockapi.io/CRUD",data)
            .then((res)=>{
                console.log(res.data);
                alert("Added Successfully.");
                setData({
                  title:"",
                catagory:"",
                price:"",
                rating:"",
                image:""
                }
                )
            navigate("/AllProduct");
            })
        }else{
            axios.put("https://65a7b4b294c2c5762da7596a.mockapi.io/CRUD/" + id, data)
            .then((res)=>{
                console.log(res.data);
                navigate("/AllProduct");
            })
        }
       
    }

  return (
    <>
    <div>
        <button onClick={(e)=>backbtn(e)} className='back-btn'  style={{margin:"30px"}}><i class="fa-solid fa-arrow-left"></i></button>
    </div>
    <div className='main-add'>
        
        <h1>Add Product</h1>
        <div>
        <div className="container-add">

            <span>Enter Title: </span>
            <input onChange={(e)=>{handleChange(e)}} type="text" name="" id="title" value={data.title} placeholder='Enter Title Of Product' />


            <span>Enter Catagory: </span>
            <input onChange={(e)=>{handleChange(e)}} type="text" name="" id="catagory" value={data.catagory} placeholder='Enter Catagory Of Product' /><br /><br />


            <span>Enter Price: </span>
            <input onChange={(e)=>{handleChange(e)}} type="text" name="" id="price" value={data.price} placeholder='Enter Price Of Product' />
            

            <span>Enter Rating: </span> 
            <input onChange={(e)=>{handleChange(e)}} type="text" name="" id="rating" value={data.rating} placeholder='Enter Rating Of Product' />


            <br /><br />
            <span>Upload Image: (URL only)</span>
            
            <input onChange={(e)=>{handleChange(e)}} type="text" name="" id="image" value={data.image} placeholder='Paste Url Here'/>
            <br /><br />
            <button onClick={(e)=>upload(e)} className=' btn btn-success'>Submit</button>

        </div>
        </div>
    </div>
    </>
  )
}