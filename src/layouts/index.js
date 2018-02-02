import React from 'react'
import Link from 'gatsby-link'
import logo from '../logo.png'
import youtubeLogo from '../youtube.png'
import instaLogo from "../instragram_white.png"
import mailLogo from "../mailicon.png"
import styles from '../utils/styles/index.module.css'

const ListLink = props =>
  <li style={{display: 'inline-block', marginRight: '1rem'}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Logo = props =>
  <img src={props.source} alt={props.alt} />

// export default IndexLayout;
export default({children}) =>
  <div>
    <header className={styles.navigation}>
      <ul>
        <li><a href="https://www.youtube.com/channel/UCa78RvANZ-v72po2Y_Ic2Hw"><img src={youtubeLogo} alt="youtube" className={styles.icon} /></a></li>
        <li><a href="mailto:hello@dumboe.com"><img src={mailLogo} alt="email" className={styles.icon}/></a></li>
        <li><a href="https://www.instagram.com/dumboe/"><img src={instaLogo} alt="instagram" className={styles.icon} /></a></li>
        <ListLink to='/'><img src={logo} alt="dumboe" className={styles.icon}/></ListLink>
      </ul>
    </header>
    {children()}
    <footer className="footer">
      Got a project? <br></br>
      <a href="mailto:hello@dumboe.com">hello@dumboe.com</a>
    </footer>
  </div>