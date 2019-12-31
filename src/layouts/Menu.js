import React, { useState } from 'react'
import { StaticQuery, graphql } from "gatsby"
import { MdHome, MdMenu, MdWork, MdMoreVert, MdFormatQuote, MdWeb } from 'react-icons/md' 
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
            <MdMenu />
          </button>
          <Img fixed={image.fixed} className={style.avatar} />
          <Link 
            to='/' 
            className={style.home} 
            activeClassName={style.homeActive} 
            title='Home'>
            <MdHome />
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
                <MdHome />
                Home
            </Link>
          </li>
          <li>
            <Link to='/blog' 
              onClick={() => setShowSidebar(false)}>
                <MdFormatQuote />
                Blog
            </Link>
          </li>
          <li>
            <span>
              <MdWork />
              Work
            </span>

            <ul>
              <li>
                <a href='https://developer.box.com' 
                  onClick={() => setShowSidebar(false)}>
                    <MdMoreVert />
                    Box Developer Docs
                </a>
              </li>
              <li>
                <Link to='/talks' 
                  onClick={() => setShowSidebar(false)}>
                    <MdMoreVert />
                    Public Speaking
                </Link>
              </li>
              <li>
                <Link to='/galleries' 
                  onClick={() => setShowSidebar(false)}>
                    <MdMoreVert />
                    DX Design Patterns
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <MdWeb />
              Online
            </span>

            <ul>
              <li>
                <a href='https://twitter.com/cbetta' 
                  onClick={() => setShowSidebar(false)}>
                    <MdMoreVert />
                    Twitter
                </a>
              </li>
              <li>
                <a href='https://github.com/cbetta' 
                  onClick={() => setShowSidebar(false)}>
                    <MdMoreVert />
                    GitHub
                </a>
              </li>
              <li>
                <a href='https://linkedin.com/in/cbetta' 
                  onClick={() => setShowSidebar(false)}>
                    <MdMoreVert />
                    LinkedIn
                </a>
              </li>
              <li>
                <a href='https://youtube.com/cbetta' 
                  onClick={() => setShowSidebar(false)}>
                    <MdMoreVert />
                    YouTube
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

