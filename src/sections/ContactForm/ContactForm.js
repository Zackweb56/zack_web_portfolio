import React from 'react'
import './ContactForm.css'
import Titles from '../../components/Titles/Titles'
import Button from '../../components/Button/Button';
import { BsFillSendCheckFill } from "react-icons/bs";

const ContactForm = () => {
  return (
    <div>
        <section className="contact" id="contact">
            <Titles title="contact me" />

            <form action="" data-aos="zoom">

                <div className="inputBox">
                    <input type="text" placeholder="name" data-aos="fade-up" />
                    <input type="email" placeholder="email" data-aos="fade-up" />
                    <input type="number" placeholder="number" data-aos="fade-up" />
                </div>

                <textarea name="message" placeholder="your message" cols="30" rows="10" data-aos="fade-up"></textarea>
                
                <button type="submit" className='s_btn'>
                    <Button title="send message" icon={<BsFillSendCheckFill />} />
                </button>

            </form>

        </section>
    </div>
  )
}

export default ContactForm