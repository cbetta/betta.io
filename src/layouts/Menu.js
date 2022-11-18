import React, { useState } from 'react'
import { StaticQuery, graphql } from "gatsby"
import { FiBook, FiHome, FiMenu, FiBriefcase, FiGlobe, FiMoreVertical } from 'react-icons/fi' 
import { Link } from "gatsby"
import Img from "gatsby-image"

import style from './Menu.module.scss'

const Menu = ({ path, image }) => {

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <div className={style.menu} data-path={path}>
        <div>
          <button className={style.toggle} onClick={() => setShowSidebar(true)} title='Show sidebar'>
            <FiMenu />
          </button>
          <Img fixed={image.fixed} className={style.avatar} />
          <Link 
            to='/' 
            className={style.home} 
            activeClassName={style.homeActive} 
            title='Home'>
            <FiHome />
          </Link>
          <span>Cristiano Betta</span>
        </div>
      </div>
      <div data-active={showSidebar} className={style.sidebar}>
        <div 
          onClick={() => setShowSidebar(false)}
          onKeyDown={() => setShowSidebar(false)} 
          role='button' 
          tabIndex='0'
          title='Hide sidebar'></div>
        <ul>
          <li>
            <Link to='/' 
              onClick={() => setShowSidebar(false)}>
                <FiHome />
                Home
            </Link>
          </li>
          <li>
            <Link to='/blog' 
              onClick={() => setShowSidebar(false)}>
                <FiBook />
                Blog
            </Link>
          </li>
          <li>
            <span>
              <FiBriefcase />
              Work
            </span>

            <ul>
              <li>
                <a href='https://gr4vy.com' 
                  onClick={() => setShowSidebar(false)}>
                    <FiMoreVertical />
                    Gr4vy
                </a>
              </li>
              <li>
                <Link to='/talks' 
                  onClick={() => setShowSidebar(false)}>
                    <FiMoreVertical />
                    Public Speaking
                </Link>
              </li>
              <li>
                <Link to='/galleries' 
                  onClick={() => setShowSidebar(false)}>
                    <FiMoreVertical />
                    DX Design Patterns
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <FiGlobe />
              Online
            </span>

            <ul>
              <li>
                <a href='https://twitter.com/cbetta' 
                  onClick={() => setShowSidebar(false)}>
                    <FiMoreVertical />
                    Twitter
                </a>
              </li>
              <li>
                <a href='https://linkedin.com/in/cbetta' 
                  onClick={() => setShowSidebar(false)}>
                    <FiMoreVertical />
                    LinkedIn
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}


export default (props) => (
  <StaticQuery
    query={query}
    render={(data => (
      <Menu {...props} image={data.image.childImageSharp} />
    ))}
  />
)

const query = graphql`
  query {
    image: file(relativePath: { eq: "cbetta.jpg" }) {
      childImageSharp {
        fixed(width: 20) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

