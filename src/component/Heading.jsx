import React from "react";
import MyImage from "../assets/MyImage.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
<>
<header 
      class="masthead"
      style={{
        backgroundImage: `url(${MyImage})`,
      }}
    >
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center text-white">
              <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
              
              <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="row">
                  <div className="col">
                    <input 
                      className="form-control form-control-lg" 
                      id="emailAddress" 
                      type="email" 
                      placeholder="Email Address" 
                      data-sb-validations="required,email" 
                    />
                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">
                      Email Address is required.
                    </div>
                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">
                      Email Address is not valid.
                    </div>
                  </div>
                  <div className="col-auto">
                    <button 
                      className="btn btn-primary btn-lg disabled" 
                      id="submitButton" 
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>

                </div>
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                      
                  </div>
                </div>
                
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </header>
     
    </>
  );
};

export default App;
