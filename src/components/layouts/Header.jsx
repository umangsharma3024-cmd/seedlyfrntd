import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Header() {


  let isLogin = sessionStorage.getItem("isLogin")
  let name = sessionStorage.getItem("name")
  const nav = useNavigate()
  const loc = useLocation()
  const logout = () => {

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear()
        nav("/login")
        Swal.fire({
          title: "Logout!",
          text: "Logout successfully.",
          icon: "success"
        });
      }
    });
  }


  return (
    <>
      {/* TOPBAR */}
      <div className="container-fluid px-5 d-none d-lg-block">
        <div className="row gx-5 py-3 align-items-center">
          <div className="col-lg-3">
            <div className="d-flex align-items-center justify-content-start">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-2" />
              <h2 className="mb-0">+91 9876543219</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/" className="navbar-brand ms-lg-5">
                <h1 className="m-0 display-4 text-primary">
                  <span className="text-secondary">Seedly</span>
                </h1>
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex align-items-center justify-content-end">

              <a
                className="btn btn-primary btn-square rounded-circle me-2"
                href="https://www.facebook.com"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-primary btn-square rounded-circle me-2"
                href="https://www.linkedin.com"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-primary btn-square rounded-circle" href="https://www.instagram.com">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* NavBar*/}
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
        <Link href="index.html" className="navbar-brand d-flex d-lg-none">
          <h1 className="m-0 display-4 text-secondary">
            <span className="text-white">Farm</span>Fresh
          </h1>
        </Link>
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
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              HOME
            </Link>
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              ABOUT
            </Link>

            <Link to="/user/season" className={location.pathname === "/user/season" ? "nav-link active" : "nav-link"}>
              SEASON
            </Link>
            <Link to="/user/land" className={location.pathname === "/user/land" ? "nav-link active" : "nav-link"}>
              LAND
            </Link>
            {isLogin ?
              <>
                <Link to="/booking/manage" className={location.pathname === "/booking/manage" ? "nav-link active" : "nav-link"}>All Booking</Link>
              </>
              :
              ""
            }
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
             CONTACT
            </Link>


            {isLogin ?

              <>



                <li >
                  <Link to="#" onClick={logout} className="nav-item nav-link ">Logout {name}</Link>
                </li>
              </>

              :
              <li >
                <Link to="/login" className="nav-item nav-link ">Login</Link>
              </li>
            }
            
            {/* <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Booking</button>

                <ul className="dropdown-menu">
                  <li><Link to="/booking/add" className="dropdown-item">ADD Booking</Link></li>
                  <li><Link to="/booking/manage" className="dropdown-item">ALL Booking</Link></li>


                </ul>
              </li> */}
            {/* <div className="nav-item dropdown">
          <Link
            to="/"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </Link>
          <div className="dropdown-menu m-0">
            <Link to="/blog" className="dropdown-item">
              Blog Grid
            </Link>
            <Link to="/detail" className="dropdown-item">
              Blog Detail
            </Link>
            <Link to="/feature" className="dropdown-item">
              Features
            </Link>
            <Link to="/team" className="dropdown-item">
              The Team
            </Link>
            <Link to="/testimonial" className="dropdown-item">
              Testimonial
            </Link>
          </div>
        </div> */}

          </div>
        </div>
      </nav>

    </>
  )
}