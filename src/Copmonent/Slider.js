


import './Slider.css';

function Slider() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2023/11/SF_Blog_Image_Ecommerce_Changing_Everything.png" className="d-block w-100 height-400" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://blog-frontend.envato.com/cdn-cgi/image/width=2560,quality=75,format=auto/uploads/sites/2/2022/04/E-commerce-App-JPG-File-scaled.jpg" className="d-block w-100 height-400" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwGCF-UQxsScY2Z6Avbgyuet0PqdyHFi_-_bQv6NukA&s" className="d-block w-100 height-400" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
