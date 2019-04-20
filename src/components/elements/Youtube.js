import React from "react"
import ResponsiveEmbed from 'react-responsive-embed'

const Youtube = ({ id }) => (
  <div>
    <ResponsiveEmbed 
      src={ `https://www.youtube.com/embed/${id}` }
      allowFullScreen />
  </div>
)

export default Youtube