import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Alert from './components/Alert';

function App() {
  const [jwtToken, setJwtToken] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");

  const navigate = useNavigate();
  const logout = () => {
    setJwtToken("");
    navigate("/login");
  }

  return (
    <>
      <header class="p-3 text-bg-dark">
        <div className="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <nav>
              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <Link to="/" className="nav-link px-2 text-secondary">Home</Link>
                <Link to="/movies" className="nav-link px-2 text-white">Movies</Link>
                <Link to="/genres" className="nav-link px-2 text-white">Genres</Link>
                {jwtToken !== "" &&
                  <>
                    <Link to="/admin/movie/0" className="nav-link px-2 text-white">Add Movie</Link>
                    <Link to="/manage-catalogue" className="nav-link px-2 text-white">Manage Catalogue</Link>
                    <Link to="/graphql" className="nav-link px-2 text-white">GraphQL</Link>
                  </>
                }
              </ul>
            </nav>
            <div className="col text-end">
              {jwtToken === ""
                ? <Link to="/login"> <span className="btn btn-outline-light me-2"> Login</span></Link>
                : <a href="#!" onClick={logout}><span className="btn btn-warning">Logout</span></a>}
                <a href="#!" onClick={logout}><span className="btn btn-warning">Signup</span></a>

            </div>
          </div>
        </div>
      </header >
      <div className="container">
        <div className="col-md-10">
          <Alert
            message={alertMessage}
            className={alertClassName}
          />
          <Outlet context={{
            jwtToken, setJwtToken, setAlertClassName, setAlertMessage
          }} />
        </div>
      </div>
    </>


  );
}

export default App;
