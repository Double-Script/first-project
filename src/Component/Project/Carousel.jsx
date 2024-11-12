// import React from 'react'

// export default function Carousel() {
//   return (
//     <div>
//       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/23/Central/BAU/NOv/Desktop_Hero_3000x1200_2_2x._CB574373355_.jpg" alt="First slide" />
//     </div>
//     <div class="carousel-item">
//       <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/23/Central/BAU/NOv/Desktop_Hero_3000x1200_2_2x._CB574373355_.jpg" alt="Second slide" />
//     </div>
//     <div class="carousel-item">
//       <img className="d-block w-100" src="..." alt="Third slide" />
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
//     </div>
//   )
// }


import React from 'react'
// import template from '../template.png'
// import add from '../add.jpg'
// import tempalate1 from '../template1.jpg'


export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-banner2_qH9hUCU.jpg?format=webp&w=1536&dpr=0.8" style={{height:'500 ',width:'150'}} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>BUY BEST QUALITY</h5>
        <p>Some representative winter ware collection.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_Men-Oversized-Sweatshirts.jpg?format=webp&w=1536&dpr=0.8"  style={{height:'500 ',width:'150'}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>ALL BRANDS</h5>
        <p>Some representative oversized sweatshirt.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_banner_.most_loved_oversized_full_sleeves.jpg?format=webp&w=1536&dpr=0.8"  style={{height:'500 ',width:'150'}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>ALL SUPPLEMENTS</h5>
        <p>Some representative oversized full sleeves.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}