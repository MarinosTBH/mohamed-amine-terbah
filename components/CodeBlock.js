import React from 'react'

const CodeBlock = ({ message }) => {
  return (
    <pre style={{ backgroundColor: "black", color: "white", padding: "5px", marginTop: "5px", fontSize:"15px"}}>
    <code>
      $ {message}
    </code>
  </pre>
  )
}

export default CodeBlock