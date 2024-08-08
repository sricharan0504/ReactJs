import React from 'react'
import './footer.css'
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub  } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <div className='footer-div'>
                <div className='icons'>
                    <FaLinkedin/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaGithub/>
                </div>
            </div>
        </>
    )
}