import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made in ❤️ for {" "}
              <a  href="https://www.instagram.com/" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">For Prototype Test</a>
            </p>
            <a className="text-dark fs-4" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
