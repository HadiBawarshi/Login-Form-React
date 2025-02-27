import React from 'react';
const Header = () => {
    return (  

        <div className="d-flex align-items-center border-bottom py-2">
        <div className="d-flex align-items-center justify-content-lg-end justify-content-sm-end gap-4 w-100 my-3 mx-5">
          <div className="fs-9">Need Help?</div>

          <div>
            <a className="btn btn-outline-secondary">
              <i className="bi bi-headphones"></i>{" "}
              <span className="fs-9">Contact Us</span>
            </a>
          </div>
          <div>
            <i className="bi bi-x fs-4" style={{ cursor: "pointer" }}></i>
          </div>
        </div>
      </div>
    );
};

export default Header;
