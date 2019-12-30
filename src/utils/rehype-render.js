import React from "react"
import rehypeReact from "rehype-react"

import Message from "../components/elements/Message"
import Youtube from "../components/elements/Youtube"
import Icon from "../components/elements/Icon"
import Table from "../components/elements/Table"

const components = { 
  'message': Message, 
  'youtube': Youtube,
  'icon': Icon,
  'table': Table
}

let rehype = new rehypeReact({
  createElement: React.createElement,
  components: components
}).Compiler


export const recognizedCompontents = components
export const render = (ast) => rehype(ast)