import react from 'react'
import "../Style/Contact.css"
import "../App.css"
import "../Style/Nav.css"


function Contact() {
  return (


    <div  ClassName="Contact-Box">
    <form className="Form" name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input className="input-field" type="text" placeholder="Name" name="name"/>
          <input className="input-field" type="email" name="email" placeholder="Email"/>
          <textarea  className="text-feild" name="message"  placeholder="message"></textarea>
          <button className="send"type="submit">Send</button>
   </form>

    </div>
  );
}

export default Contact;
