import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactMe = () => {
  const form = useRef();

 function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_tkeiuql', 'template_s85159j', e.target, 'user_iTygLNkD7hBCoooWHjhYk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className=" sm={8}>sm=8 text-center mt-5 w-auto bg-info bg-opacity-10">
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br/>
      <input type="text" name="user_name" required /><br/>
      <label>Email</label><br/>
      <input type="email" name="user_email" /><br/>
      <label>Message</label><br/>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" />
      <a className="linkB text-decoration-none fw-bold my-3
            d-block" href="/home">Home</a>
    </form>
    </div>
  );
};