
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Desk from '../images/Desk.jpg'

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6xiqkyp', 'template_rep3qpp', form.current, 'ChUYKVVUT3MpRwQ5j')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset()
    };

    
    const handleChange = event => document.getElementById("floatingTextArea").setAttribute("value", "background-color:red;");


    return (
        <div id="contact" className="fullscreen bg-primary bg-opacity-75 deskPicture" style={{ backgroundImage: `url(${Desk})`}}>
            <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="container">
        <div className="row d-flex align-content-center justify-content-center">
          <div className="row mt-5 p-5 w-50 h-50 align-left rounded-4 bg-light">  
              <h2 className="pb-4 font-36">Take Control, Get in Touch</h2>
              <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 form-floating">
                      <input type="text" name="user_name"  class="form-control" id="floatingName" placeholder="Name" required />
                      <label for="floatingInput" className="">Name</label>
                  </div>
                  <div className="mb-3 form-floating">
                      <input type="email" name="user_email" class="form-control" id="floatingEmail" placeholder="name@example.com" required />
                      <label for="floatingInput">Email</label>
                  </div>
                  <div className="mb-3 form-floating">
                      <input type="tel" name="user_phone" class="form-control" id="floatingPhone" placeholder="416-123-4567" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                      <label for="floatingInput">Phone (optional)</label>
                      Format:  123-456-7890
                  </div>
                  <div className="mb-3 form-floating">
                      <textarea name="message" className="form-control" id="floatingTextArea" placeholder="What is your biggest bookkeeping issue?" value= "default value" required></textarea>
                      <label for="floatingTextarea">What is your biggest bookkeeping issue?</label>
                      
                  </div>
              <input type="submit" className="btn btn-primary py-3 px-5 rounded-4" value="Send" />
              </form>
              <button type="button" className="btn btn-danger" id="testbutton" onClick={handleChange}>Prefill</button>
          </div>
        </div>
      </div>
            </div>

            
        </div>
    )
}

export default ContactForm;