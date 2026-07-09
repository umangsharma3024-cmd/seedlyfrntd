import { Link } from "react-router-dom";

export default function(){
    return(
        <>

        <>
  {/* Topbar Start */}

  {/* Navbar End */}
  {/* Hero Start */}
  <div className="container-fluid bg-primary py-5 bg-hero mb-5">
    <div className="container py-5">
      <div className="row justify-content-start">
        <div className="col-lg-8 text-center text-lg-start">
          <h1 className="display-1 text-white mb-md-4">About Us</h1>
          <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">
            Home
          </Link>
          <Link to="/about" className="btn btn-secondary py-md-3 px-md-5">
            About Us
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Hero End */}
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
  {/* <div className="container-fluid bg-primary facts py-5 mb-5">
    <div className="container py-5">
      <div className="row gx-5 gy-4">
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-star fs-4 text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-white">Our Experience</h5>
              <h1
                className="display-5 text-white mb-0"
                data-toggle="counter-up"
              >
                12345
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-users fs-4 text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-white">Farm Specialist</h5>
              <h1
                className="display-5 text-white mb-0"
                data-toggle="counter-up"
              >
                12345
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-check fs-4 text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-white">Complete Project</h5>
              <h1
                className="display-5 text-white mb-0"
                data-toggle="counter-up"
              >
                12345
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex">
            <div
              className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-mug-hot fs-4 text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-white">Happy Clients</h5>
              <h1
                className="display-5 text-white mb-0"
                data-toggle="counter-up"
              >
                12345
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <div className="container-fluid bg-primary py-1 mb-5">
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
          <h5>Select Season</h5>
          <p className="mb-0">
            User selects the farming season (Summer, Winter, Monsoon).
          </p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="text-white">
          <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
               style={{ width: 80, height: 80 }}>
            <i className="fa fa-leaf fs-3 text-white" />
          </div>
          <h5>Choose Crop</h5>
          <p className="mb-0">
            Crops available for that season are displayed for selection.
          </p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="text-white">
          <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
               style={{ width: 80, height: 80 }}>
            <i className="fa fa-map-marker-alt fs-3 text-white" />
          </div>
          <h5>Select Land</h5>
          <p className="mb-0">
            User views farmer lands offering the selected crop.
          </p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="text-white">
          <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
               style={{ width: 80, height: 80 }}>
            <i className="fa fa-check-circle fs-3 text-white" />
          </div>
          <h5>Book & Track</h5>
          <p className="mb-0">
            Land is booked for a fixed period and crop progress is tracked.
          </p>
        </div>
      </div>

    </div>

  </div>
</div>

  {/* Facts End */}
  {/* Team Start */}
  <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
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
            <i className="fa fa-map-marker-alt fs-4 text-white" />
          </div>
          <h4 className="text-white">Verified Land Listings</h4>
          <p className="mb-0">
            Farmers can securely register and list their land with season 
            and crop details, making it easy for users to explore available options.
          </p>
        </div>

        <div className="text-white">
          <div
            className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
            style={{ width: 60, height: 60 }}
          >
            <i className="fa fa-leaf fs-4 text-white" />
          </div>
          <h4 className="text-white">Season-Based Crop Selection</h4>
          <p className="mb-0">
            Crops are displayed according to the selected season, helping users 
            choose suitable options for better productivity.
          </p>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
          <p>
            Our platform connects farmers and users through a simple process: 
            farmers list land and crops, users select crops based on season, 
            and book the land for a fixed duration. This ensures better land 
            utilization and transparent booking management.
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
            <i className="fa fa-calendar-alt fs-4 text-white" />
          </div>
          <h4 className="text-white">Flexible Booking Period</h4>
          <p className="mb-0">
            Users can book land for a specific time period based on 
            crop cycle and seasonal requirements.
          </p>
        </div>

        <div className="text-white">
          <div
            className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
            style={{ width: 60, height: 60 }}
          >
            <i className="fa fa-handshake fs-4 text-white" />
          </div>
          <h4 className="text-white">Direct Farmer Connection</h4>
          <p className="mb-0">
            The system creates a transparent connection between farmers 
            and users, simplifying communication and land booking.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>
 
  {/* Team End */}
  {/* Footer Start */}
 
  <a href="#" className="btn btn-secondary py-3 fs-4 back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>


        </>
    )
}