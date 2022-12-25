import React from 'react'

import '../assets/css/footer.css'


export const Footer = () => {
  return (
    <div className="footer">
      <div>
        Copyright © {new Date().getFullYear()} Dreamware Games
      </div>
    </div>
  )
}
