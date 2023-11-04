import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      {/* <div className="container py-3"> */}
      <header className="main-header">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <NavLink
              to="/"
              className="d-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <span className="fs-4">BagatPSchool</span>
            </NavLink>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              <NavLink
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                to="/"
              >
                Bosh sahifa
              </NavLink>
              <NavLink
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                to="/news"
              >
                Yangiliklar
              </NavLink>
              <NavLink
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                to="/occasions"
              >
                Tadbirlar
              </NavLink>
              <NavLink
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                to="/blog"
              >
                Maqolalar
              </NavLink>
              <NavLink
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                to="/contact"
              >
                Bog'lanish
              </NavLink>
              <div
                className="btn-group"
                style={{ marginLeft: "5px" }}
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-primary">
                  <NavLink
                    className="text-white text-decoration-none"
                    to="/login"
                  >
                    Kirish
                  </NavLink>
                </button>
                <button type="button" class="btn btn-success">
                  <NavLink
                    className="text-white text-decoration-none"
                    to="/register"
                  >
                    Ro'yhatdan O'tish
                  </NavLink>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* </div> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
