import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_zmc4bvc';
const TEMPLATE_ID = 'template_id123';
const USER_ID = 'Mz1N6YgnpC6hOLOCk';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');
    if (!form.current) return;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(() => {
        setStatus('success');
        form.current?.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section className="Contact">
      {/* Banner Image */}
      <div className="Contact-Banner">
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&h=300&fit=crop"
          alt="Contact Banner"
          className="Contact-Banner-Image"
        />
        <div className="Contact-Banner-Overlay">
          <h1>Contact Me</h1>
          <p>Let's connect! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.</p>
        </div>
      </div>

      <div className="Contact-Content">
        {/* Contact Info */}
        <div className="Contact-Info">
          <h2>Get in Touch</h2>
          <ul>
            <li><span role="img" aria-label="email">📧</span> your.email@example.com</li>
            <li><span role="img" aria-label="phone">📱</span> +1 (555) 123-4567</li>
            <li><span role="img" aria-label="location">📍</span> New York, NY</li>
            <li><span role="img" aria-label="linkedin">🔗</span> linkedin.com/in/yourprofile</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="Contact-Form" ref={form} onSubmit={sendEmail}>
          <h2>Send a Message</h2>
          <div className="Form-Group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" placeholder="Your Name" required />
          </div>
          <div className="Form-Group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" placeholder="Your Email" required />
          </div>
          <div className="Form-Group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows={5} required />
          </div>
          <button type="submit" className="Send-Btn">Send Message</button>
          {status === 'success' && <p className="Form-Status Success">Message sent successfully!</p>}
          {status === 'error' && <p className="Form-Status Error">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
