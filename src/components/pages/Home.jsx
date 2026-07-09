import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>

        <>
  {/* Topbar Start */}
  {/* <div className="container-fluid px-5 d-none d-lg-block">
    <div className="row gx-5 py-3 align-items-center">
      <div className="col-lg-3">
        <div className="d-flex align-items-center justify-content-start">
          <i className="bi bi-phone-vibrate fs-1 text-primary me-2" />
          <h2 className="mb-0">+012 345 6789</h2>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="d-flex align-items-center justify-content-center">
          <a href="index.html" className="navbar-brand ms-lg-5">
            <h1 className="m-0 display-4 text-primary">
              <span className="text-secondary">Farm</span>Fresh
            </h1>
          </a>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="d-flex align-items-center justify-content-end">
          <a
            className="btn btn-primary btn-square rounded-circle me-2"
            href="#"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-primary btn-square rounded-circle me-2"
            href="#"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-primary btn-square rounded-circle me-2"
            href="#"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="btn btn-primary btn-square rounded-circle" href="#">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </div> */}
  {/* Topbar End */}
  {/* Navbar Start */}
  {/* <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
    <a href="index.html" className="navbar-brand d-flex d-lg-none">
      <h1 className="m-0 display-4 text-secondary">
        <span className="text-white">Farm</span>Fresh
      </h1>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto py-0">
        <a href="index.html" className="nav-item nav-link active">
          Home
        </a>
        <a href="about.html" className="nav-item nav-link">
          About
        </a>
        <a href="service.html" className="nav-item nav-link">
          Service
        </a>
        <a href="product.html" className="nav-item nav-link">
          Product
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu m-0">
            <a href="blog.html" className="dropdown-item">
              Blog Grid
            </a>
            <a href="detail.html" className="dropdown-item">
              Blog Detail
            </a>
            <a href="feature.html" className="dropdown-item">
              Features
            </a>
            <a href="team.html" className="dropdown-item">
              The Team
            </a>
            <a href="testimonial.html" className="dropdown-item">
              Testimonial
            </a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">
          Contact
        </a>
      </div>
    </div>
  </nav> */}
  {/* Navbar End */}
  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div
      id="header-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100 h-50" src="/assets/img/woman-planting-vegetables-smiling-farm-with-equipments.jpg" alt="Image" />
          <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
            <div className="text-start p-5" style={{ maxWidth: 900 }}>
              <h3 className="text-white">Organic Vegetables   </h3>
              <h1 className="display-1 text-white mb-md-4">
                Organic Vegetables For Healthy Life
              </h1>
              <Link to="/user/land" className="btn btn-primary py-md-3 px-md-5 me-3">
                Lands
              </Link>
              <Link to="/user/season" className="btn btn-secondary py-md-3 px-md-5">
               Seasons
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100 h-50" src="/assets/img/truck-working-field-sunny-day.jpg" alt="Image" />
          <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
            <div className="text-start p-5" style={{ maxWidth: 900 }}>
              <h3 className="text-white">Organic Fruits</h3>
              <h1 className="display-1 text-white mb-md-4">
                Organic Fruits For Better Health
              </h1>
              <Link to="/user/land" className="btn btn-primary py-md-3 px-md-5 me-3">
                Lands
              </Link>
              <Link to="/user/season" className="btn btn-secondary py-md-3 px-md-5">
               Seasons
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel End */}
  {/* Banner Start */}
  <div className="container-fluid banner mb-5">
    <div className="container">
      <div className="row gx-0">
        <div className="col-md-6">
          <div
            className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5"
            style={{ height: 300 }}
          >
            <h3 className="text-white mb-3">Organic Vegetables</h3>
            <p className="text-white">
              Fresh vegetables provide essential nutrients and fiber that support digestion and promote overall well-being.
            </p>
            
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5"
            style={{ height: 300 }}
          >
            <h3 className="text-white mb-3">Organic Fruits</h3>
            <p className="text-white">
             Fresh fruits are rich in vitamins, minerals, and antioxidants that help boost immunity and keep the body healthy.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Start */}
  {/* About Start */}
  <div className="container-fluid about pt-5">
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="d-flex h-70 border border-5 border-primary border-bottom-0 pt-4">
            <img className="img-fluid mt-auto mx-auto" src="/assets/img/farmer.jpg" />
          </div>
        </div>
        <div className="col-lg-6 pb-5">
          <div className="mb-3 pb-2">
            <h6 className="text-primary text-uppercase">About Us</h6>
            <h1 className="display-5">
          AI-Powered Smart Crop Recommendation System
            </h1>
          </div>
          <p className="mb-4">
            Our project is an intelligent agriculture solution that uses Artificial Intelligence and Data Analysis to recommend the most suitable crops based on:

          </p>
          <div className="row gx-5 gy-4">
            <div className="col-sm-6">
              <i className="fa-solid fa-sun display-2 text-secondary" />
              <h4>Seasonal patterns</h4>
              <p className="mb-0">
        In the summer season, temperatures are generally high. 
      The system suggests crops that can tolerate heat and grow 
      well in warm weather conditions.

              </p>
            </div>
            <div className="col-sm-6">
              <i className="fa fa-solid fa-wheat-awn display-1 text-secondary" />
              <h4> Soil type & nutrient levels</h4>
              <p className="mb-0">
                      Black soil retains moisture and is suitable for crops 
      like cotton, soybean, and sunflower. Based on this soil 
      type, the system recommends crops that grow well in it.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Facts Start */}
  <div className="container-fluid bg-primary py-3 mb-4">
  <div className="container py-3">
    
    <div className="text-center mb-5">
      <h6 className="text-uppercase text-secondary">Process Flow</h6>
      <h1 className="display-5 text-white">How It Works</h1>
    </div>

    <div className="row text-center">

      <div className="col-md-3">
        <div className="text-white">
          <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
               style={{ width: 80, height: 80 }}>
            <i className="fa fa-calendar-alt fs-3 text-white" />
          </div>
          <h5 className="text-light">Select Season</h5>
          {/* <p className="mb-0">
            User selects the farming season (Summer, Winter, Monsoon).
          </p> */}
        </div>
      </div>

      <div className="col-md-3">
        <div className="text-white">
          <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
               style={{ width: 80, height: 80 }}>
            <i className="fa fa-leaf fs-3 text-white" />
          </div>
          <h5 className="text-light">Choose Crop</h5>
          {/* <p className="mb-0">
            Crops available for that season are displayed for selection.
          </p> */}
        </div>
      </div>

      <div className="col-md-3">
        <div className="text-white">
          <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
               style={{ width: 80, height: 80 }}>
            <i className="fa fa-map-marker-alt fs-3 text-white" />
          </div>
          <h5 className="text-light">Select Land</h5>
          {/* <p className="mb-0">
            User views farmer lands offering the selected crop.
          </p> */}
        </div>
      </div>

      <div className="col-md-3">
        <div className="text-white">
          <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
               style={{ width: 80, height: 80 }}>
            <i className="fa fa-check-circle fs-3 text-white" />
          </div>
          <h5 className="text-light">Book & Track</h5>
          {/* <p className="mb-0">
            Land is booked for a fixed period and crop progress is tracked.
          </p> */}
        </div>
      </div>

    </div>

  </div>
</div>
  {/* Facts End */}
  {/* Services Start */}
  {/* <div className="container-fluid py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <div className="mb-3">
            <h6 className="text-primary text-uppercase">Services</h6>
            <h1 className="display-5">Organic Farm Services</h1>
          </div>
          <p className="mb-4">
           Organic farming avoids chemicals and focuses on natural methods to produce safe, healthy, and environmentally friendly food.
          </p>
         
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-carrot display-1 text-primary mb-3" />
            <h4>Fresh Vegetables</h4>
            <p className="mb-0">
              Fresh vegetables provide essential nutrients and fiber that support digestion and promote overall well-being.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-apple-alt display-1 text-primary mb-3" />
            <h4>Fresh Fruits</h4>
            <p className="mb-0">
             Fresh fruits are rich in vitamins, minerals, and antioxidants that help boost immunity and keep the body healthy.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-dog display-1 text-primary mb-3" />
            <h4>Healty Cattle</h4>
            <p className="mb-0">
              Healthy cattle are raised with proper nutrition, clean water, and regular care to ensure high-quality dairy and meat production.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-tractor display-1 text-primary mb-3" />
            <h4>Modern Truck</h4>
            <p className="mb-0">
              Modern truck farming uses advanced techniques and technology to grow fresh produce efficiently and supply nearby markets quickly.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light text-center p-5">
            <i className="fa fa-seedling display-1 text-primary mb-3" />
            <h4>Farming Plans</h4>
            <p className="mb-0">
              A farming plan is a structured approach that outlines crops, resources, and timelines to ensure efficient and sustainable agricultural production
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <div className="container-fluid py-5">
  <div className="container">
    <div className="row g-5">

      <div className="col-lg-4 col-md-6">
        <div className="mb-3">
          <h6 className="text-primary text-uppercase">Services</h6>
          <h1 className="display-5">Smart Land Booking Platform</h1>
        </div>
        <p className="mb-4">
          Our platform connects farmers and users by allowing farmers to list 
          their agricultural land and available crops based on season. 
          Users can explore, select crops, and book land for a specific period.
        </p>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-light text-center p-5">
          <i className="fa fa-map-marker-alt display-1 text-primary mb-3" />
          <h4>Land Listing</h4>
          <p className="mb-0">
            Farmers can register and add their land details including 
            location, size, soil type, season, and available crops.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-light text-center p-5">
          <i className="fa fa-leaf display-1 text-primary mb-3" />
          <h4>Crop Selection</h4>
          <p className="mb-0">
            Users can view crops provided by farmers for a selected season 
            and choose the most suitable crop for cultivation.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-light text-center p-5">
          <i className="fa fa-calendar-alt display-1 text-primary mb-3" />
          <h4>Season-Based Booking</h4>
          <p className="mb-0">
            Land can be booked based on the selected season and crop, 
            ensuring availability for the required farming period.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-light text-center p-5">
          <i className="fa fa-clock display-1 text-primary mb-3" />
          <h4>Flexible Duration</h4>
          <p className="mb-0">
            Users can book land for a specific duration depending on 
            the crop cycle and seasonal requirements.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-light text-center p-5">
          <i className="fa fa-handshake display-1 text-primary mb-3" />
          <h4>Farmer-User Connection</h4>
          <p className="mb-0">
            Our system creates a direct connection between farmers and users, 
            making land utilization more efficient and transparent.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>
  {/* Services End */}
  {/* Features Start */}
  {/* <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
    <div className="container py-5 pb-lg-0">
      <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: 500 }}>
        <h6 className="text-uppercase text-secondary">Features</h6>
        <h1 className="display-5 text-white">Why Choose Us!!!</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-3">
          <div className="text-white mb-5">
            <div
              className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-seedling fs-4 text-white" />
            </div>
            <h4 className="text-white">100% Organic</h4>
            <p className="mb-0">
              Fresh vegetables provide essential nutrients and fiber that support digestion and promote overall well-being.
             
            </p>
          </div>
          <div className="text-white">
            <div
              className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-award fs-4 text-white" />
            </div>
            <h4 className="text-white">Award Winning</h4>
            <p className="mb-0">
              Award-winning farming leverages innovative techniques and technology to maximize yield and sustainability
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
            <p>
              Fresh vegetables provide essential nutrients and fiber that support digestion and promote overall well-being.
              
            </p>
            <img className="img-fluid" src="/assets/img/feature.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-white mb-5">
            <div
              className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-tractor fs-4 text-white" />
            </div>
            <h4 className="text-white">Modern Farming</h4>
            <p className="mb-0">
             Modern truck farming uses advanced techniques and technology to grow fresh produce efficiently and supply nearby markets quickly.

            </p>
          </div>
          <div className="text-white">
            <div
              className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt fs-4 text-white" />
            </div>
            <h4 className="text-white">24/7 Support</h4>
            <p className="mb-0">
             Backed by the essential safety net of 24/7 support for immediate assistance with operational issues or emergencies. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> */}

  <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
  <div className="container py-5 pb-lg-0">
    <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: 500 }}>
      <h6 className="text-uppercase text-secondary">Features</h6>
      <h1 className="display-5 text-white">Why Choose Our Platform?</h1>
    </div>

    <div className="row g-5">

      <div className="col-lg-3">
        <div className="text-white mb-5">
          <div
            className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
            style={{ width: 60, height: 60 }}
          >
            <i className="fa fa-plus fs-4 text-white" />
          </div>
          <h4 className="text-white">Easy Land Management</h4>
          <p className="mb-0">
            Farmers can add land details, assign crops by season, 
            and manage availability directly from their dashboard.
          </p>
        </div>

        <div className="text-white">
          <div
            className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
            style={{ width: 60, height: 60 }}
          >
            <i className="fa fa-chart-line fs-4 text-white" />
          </div>
          <h4 className="text-white">Crop Progress Updates</h4>
          <p className="mb-0">
            Farmers can update crop growth stages, upload progress 
            details, and keep users informed throughout the booking period.
          </p>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
          <p>
            Our system not only allows land booking based on season and crop, 
            but also ensures transparency by tracking cultivation progress. 
            Users can monitor their booked land status while farmers manage 
            updates in real time.
          </p>
          <img className="img-fluid" src="/assets/img/feature.png" alt="" />
        </div>
      </div>

      <div className="col-lg-3">
        <div className="text-white mb-5">
          <div
            className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
            style={{ width: 60, height: 60 }}
          >
            <i className="fa fa-calendar-check fs-4 text-white" />
          </div>
          <h4 className="text-white">Smart Booking System</h4>
          <p className="mb-0">
            Users can book land for a fixed duration depending 
            on the selected crop and seasonal cycle.
          </p>
        </div>

        <div className="text-white">
          <div
            className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
            style={{ width: 60, height: 60 }}
          >
            <i className="fa fa-shield-alt fs-4 text-white" />
          </div>
          <h4 className="text-white">Transparent & Secure</h4>
          <p className="mb-0">
            All bookings, crop selections, and progress updates 
            are securely managed to ensure trust between farmers and users.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

  
  {/* Features Start */}
  {/* Products Start */}
  {/* <div className="container-fluid py-5">
    <div className="container">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
        <h6 className="text-primary text-uppercase">Products</h6>
        <h1 className="display-5">Our Fresh &amp; Organic Products</h1>
      </div>
      <div className="owl-carousel product-carousel px-5">
        <div className="pb-5">
          <div className="product-item position-relative bg-white d-flex flex-column text-center">
            <img className="img-fluid mb-4" src="/assets/img/product-1.png" alt="" />
            <h6 className="mb-3">Organic Vegetable</h6>
            <h5 className="text-primary mb-0">$19.00</h5>
            <div className="btn-action d-flex justify-content-center">
              <a className="btn bg-primary py-2 px-3" href="">
                <i className="bi bi-cart text-white" />
              </a>
              <a className="btn bg-secondary py-2 px-3" href="">
                <i className="bi bi-eye text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="product-item position-relative bg-white d-flex flex-column text-center">
            <img className="img-fluid mb-4" src="/assets/img/product-2.png" alt="" />
            <h6 className="mb-3">Organic Vegetable</h6>
            <h5 className="text-primary mb-0">$19.00</h5>
            <div className="btn-action d-flex justify-content-center">
              <a className="btn bg-primary py-2 px-3" href="">
                <i className="bi bi-cart text-white" />
              </a>
              <a className="btn bg-secondary py-2 px-3" href="">
                <i className="bi bi-eye text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="product-item position-relative bg-white d-flex flex-column text-center">
            <img className="img-fluid mb-4" src="/assets/img/product-1.png" alt="" />
            <h6 className="mb-3">Organic Vegetable</h6>
            <h5 className="text-primary mb-0">$19.00</h5>
            <div className="btn-action d-flex justify-content-center">
              <a className="btn bg-primary py-2 px-3" href="">
                <i className="bi bi-cart text-white" />
              </a>
              <a className="btn bg-secondary py-2 px-3" href="">
                <i className="bi bi-eye text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="product-item position-relative bg-white d-flex flex-column text-center">
            <img className="img-fluid mb-4" src="/assets/img/product-2.png" alt="" />
            <h6 className="mb-3">Organic Vegetable</h6>
            <h5 className="text-primary mb-0">$19.00</h5>
            <div className="btn-action d-flex justify-content-center">
              <a className="btn bg-primary py-2 px-3" href="">
                <i className="bi bi-cart text-white" />
              </a>
              <a className="btn bg-secondary py-2 px-3" href="">
                <i className="bi bi-eye text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="product-item position-relative bg-white d-flex flex-column text-center">
            <img className="img-fluid mb-4" src="/assets/img/product-1.png" alt="" />
            <h6 className="mb-3">Organic Vegetable</h6>
            <h5 className="text-primary mb-0">$19.00</h5>
            <div className="btn-action d-flex justify-content-center">
              <a className="btn bg-primary py-2 px-3" href="">
                <i className="bi bi-cart text-white" />
              </a>
              <a className="btn bg-secondary py-2 px-3" href="">
                <i className="bi bi-eye text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Products End */}
  
  {/* Footer Start */}

  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-secondary py-3 fs-4 back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</>

        </>
    )
}
