import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

const Link = ({ 
  to, 
  children, 
  activeClassName, 
  partiallyActive, 
  className,
  ...rest
}) => (
  <>
    { (to.match(/^https?/) || to.match(/^mailto/)) ? (
      <a href={ to } className={className} {...rest}>
        { children }
      </a>
    ) : (
      <GatsbyLink to={ to } 
        className={className}
        activeClassName={ activeClassName }
        partiallyActive={partiallyActive}
        {...rest}
      >
        { children }
      </GatsbyLink>
    )}
  </>
)

export default Link