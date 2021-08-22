import "./Contact.css";
import React from "react";
const Contact = (props) => {
  return (
    <div style={{width:"75%", margin:"auto",marginBottom:"40px"}}>
      <h1>Contact</h1>

      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />

      <label for="country">Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>

      <label for="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        style={{ height: "200px" }}
      ></textarea>

      <input type="submit" value="Submit" />
    </div>
  );
};

export default Contact;
