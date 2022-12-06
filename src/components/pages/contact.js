import React, { useState } from 'react';
// import '../../styles/Mystyles.css';
import { validateEmail } from '../utils/helpers';

function Contact() {
    const formSubmit = (() => {

    })
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <form>
            <div className="form-group m-3">
                <label htmlFor="Name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Enter Your Name Here"
                >
                </input>
            </div>

            <div className="form-group m-3">
                <label htmlFor="email">Email address*</label>
                <input
                    value={email}
                    className="form-control"
                    name="email"
                    //   onChange=
                    //   onBlur=
                    type="email"
                    placeholder="Your Email address here"
                >

                </input></div>

                {errorMessage && (
        <div>
          <p className="error-text text-danger">{errorMessage}</p>
        </div>
      )}

      <div className="form-group m-3">
        <label htmlFor="message">Message*</label>
        <textarea className="form-control" id="message" rows="3"></textarea>
      </div>
      <p>* Required field</p>
      <button type="button" className="btn btn-success m-3" onClick={formSubmit}>
        Submit
      </button>
        </form>
    )
}

export default Contact;