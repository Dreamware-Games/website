import React from 'react'
//import { Container } from 'react-bootstrap'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import '../assets/css/footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className='mr-2'>
        {/*<a className='cstm-link' href='https://www.linkedin.com/company/zenvest-ai' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon size='lg' icon={faLinkedin} />
        </a>
        &nbsp;
        <a className='cstm-link' href='https://github.com/orgs/zenvest-ai/projects' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon size='lg' icon={faGithub} />
        </a>*/}
      </div>
      <div>
        Copyright © {new Date().getFullYear()} Dreamware Games™
      </div>
    </div>
  )
}
