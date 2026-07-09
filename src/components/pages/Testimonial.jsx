export default function Testimonial(){
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
          <h1 className="display-1 text-white mb-md-4">Testimonial</h1>
          <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">
            Home
          </a>
          <a href="" className="btn btn-secondary py-md-3 px-md-5">
            Testimonial
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* Testimonial Start */}
  <div
    className="container-fluid bg-testimonial py-5"
    style={{ margin: "90px 0 135px 0" }}
  >
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="owl-carousel testimonial-carousel p-5">
            <div className="testimonial-item text-center text-white">
              <img
                className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                src="/assets/img/testimonial-2.jpg"
                alt=""
              />
              <p className="fs-5">
                Dolores sed duo clita justo dolor et stet lorem kasd dolore
                lorem ipsum. At lorem lorem magna ut et, nonumy labore diam
                erat. Erat dolor rebum sit ipsum.
              </p>
              <hr className="mx-auto w-25" />
              <h4 className="text-white mb-0">Client Name</h4>
            </div>
            <div className="testimonial-item text-center text-white">
              <img
                className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                src="/assets/img/testimonial-2.jpg"
                alt=""
              />
              <p className="fs-5">
                Dolores sed duo clita justo dolor et stet lorem kasd dolore
                lorem ipsum. At lorem lorem magna ut et, nonumy labore diam
                erat. Erat dolor rebum sit ipsum.
              </p>
              <hr className="mx-auto w-25" />
              <h4 className="text-white mb-0">Client Name</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-secondary py-3 fs-4 back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>

        </>
    )
}