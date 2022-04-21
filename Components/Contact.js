import React from "react";
import './Contact.css'



function Contact() {
    return <>
      <center><h1 className="h1lt">Contact Us!</h1></center>
        <p>
          Address: 2, Crown-Jewel, Lane.
          <br/>Ikosi-Ketu, Lagos
          <br/>
        </p>
        <p>
          <abbr title="Phone">P</abbr>: +234 - 908 - 156 - 2255
        </p>
        <p>
          <abbr title="Email">E</abbr>:Ojoore35@gmail.com
        </p>
        <p>
          <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
        </p>
        <form>
            <label for="firstName">First Name:</label> <br/>
            <input type="text" name="firstName" value="" className="leamao" /> <br/>
            <label for="lastName">Last Name:</label> <br/>
            <input type="text" name="lastName" value="" className="leamao"/> <br/> <br/>
            <label for="email">E-mail:</label> <br/>
            <input type="email" name="" value="" className="leamao" /> <br/> <br/>
            <br/><br/>
            Message: <br/>
            <textarea name="message" rows="10" cols="40" className="leamao"></textarea>
            <br/><br/>
            <button className="submit">SUBMIT</button>

        </form>

    </>
}




export default Contact