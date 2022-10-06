
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const TestComponent = () => {
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

    return (
        <div className="fullscreen">
            <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="container">
        <div className="row d-flex align-content-center justify-content-center">
          <div className="row mt-5 p-5 w-50 h-50 align-left rounded-4 bg-light">  
              <h2 className="pb-4">Get in Touch</h2>
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
                      <textarea name="message" className="form-control" id="floatingTextArea" placeholder="What is your biggest bookkeeping issue?" required></textarea>
                      <label for="floatingTextarea">What is your biggest bookkeeping issue?</label>
                  </div>
              <input type="submit" className="btn btn-primary" value="Send" />
              </form>
          </div>
        </div>
      </div>
            </div>
        </div>
    )
}

export default TestComponent;