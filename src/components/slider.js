function Slider(){
    return (
        <>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg" className="d-block w-100"  height="600" width="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.servcorp.co.uk/media/34561/e-commerce-img.jpeg" className="d-block w-100" height="600" width="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04073619/how-ecommerce-works-1024x682.png" className="d-block w-100" height="600" width="500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
}
export default Slider;