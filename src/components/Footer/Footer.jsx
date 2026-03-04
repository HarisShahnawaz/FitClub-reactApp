import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
   <div className="footer-container">
  <hr />

  <div className="footer">

    <div className="social-links">
      <img src={Github} alt="github" />
      <img src={Instagram} alt="instagram" />
      <img src={LinkedIn} alt="linkedin" />
    </div>

    <div className="logo">
      <img src={Logo} alt="logo" />
    </div>
  

     

    <p className="copyright">
      © 2026 FitClub.By Haris Coding.
    </p>

  </div>
</div>
  )
}
export default Footer