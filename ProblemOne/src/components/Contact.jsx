import React, { Component } from 'react';

class Contact extends Component {

    
  render() {
    return (
      <section className="contact">
        <h2 className="contact__title">Contact</h2>
        <ul className="contact__list">
          <li>Email: spongebobsquarepants@gmail.com</li>
          <li>LinkedIn: linkedin.com/in/spongebob</li>
        </ul>
      </section>
    );
  }
}

export default Contact;