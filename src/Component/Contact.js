

import "../Style/About.css"


function Contact() {
  return (



    <div>
    <form className="ContactForm" name="contact" method="post">
     <input type="hidden" name="form-name" value="contact" />

         <input className="name" type="text" placeholder="Name" name="name"/>
         <input className="email" type="email" name="email" placeholder="Email"/>
         <textarea  className="text" name="message"  placeholder="message"></textarea>
         <button className="send"type="submit">Send</button>


       </form>

    </div>
  );
}

export default Contact;
