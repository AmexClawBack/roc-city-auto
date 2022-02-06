import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <main className="page contact-us-page  marginTop">
        <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Contact Us</h2>
                    <p>We will respond to you as soon as possible!</p>
                </div>
                <form>
                    <div className="mb-3"><label className="form-label" htmlFor="name">Name</label><input className="form-control" type="text" id="name" name="name"/></div>
                    <div className="mb-3"><label className="form-label" htmlFor="subject">Subject</label><input className="form-control" type="text" id="subject" name="subject"/></div>
                    <div className="mb-3"><label className="form-label" htmlFor="email">Email</label><input className="form-control" type="email" id="email" name="email"/></div>
                    <div className="mb-3"><label className="form-label" htmlFor="message">Message</label><textarea className="form-control" id="message" name="message"></textarea></div>
                    <div className="mb-3"><button className="btn btn-primary" type="submit">Send</button></div>
                </form>
            </div>
        </section>
    </main>
    );
}

export default Contact;
