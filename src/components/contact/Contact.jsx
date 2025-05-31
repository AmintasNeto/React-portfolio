import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import './contact.css'
import { SendMessageButton } from './SendMessageButton';
import { toast } from 'react-toastify';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current[0].value !== "" && form.current[1].value !== "" && form.current[2].value !== "") {
            setIsLoading(true);

            emailjs.sendForm(
                "service_4q8nwiu",
                "template_gx91d7h",
                form.current,
                "99fbclK57GUrvPh4o"
            ).then(() => {
                e.target.reset();
                
                setIsLoading(false);
                toast.success("Message sended!");
            }).catch(() => {
                setIsLoading(false);
                toast.error("An error ocurred while trying to send the message.");
            });
        } else {
            toast.warning("Please fill all the fields.");
        }
    }

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container conteiner grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info"> 
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">netorubok14@gmail.com</span>

                        <a href="mailto:netorubok14@gmail.com" className="contact__button">
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+55 (79) 998089465</span>

                        <a href="https://api.whatsapp.com/send?text=&phone=5579998089465" className="contact__button">
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                    <h3 className="contact__title">Write me your message</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name='name' className='contact__form-input' placeholder='Insert your name'/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name='email' className='contact__form-input' placeholder='Insert your email'/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" cols="30" rows="10" 
                            className='contact__form-input' placeholder='Insert your message'></textarea>
                        </div>

                        <SendMessageButton isLoading={isLoading} />
                    </form>
                </div>
        </div>
    </section>
  )
}

export default Contact