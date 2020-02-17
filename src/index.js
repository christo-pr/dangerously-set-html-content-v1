import React, { useEffect, useRef } from 'react'

function DangerouslySetHtmlContent(props) {
  const { html } = props
  const divRef = useRef(null)

  useEffect(() => {
    const slotHtml = document.createRange().createContextualFragment(html) // Create a 'tiny' document and parse the html string
    divRef.current.innerHTML = '' // Clear the container
    divRef.current.appendChild(slotHtml) // Append the new content
  }, [html])


  return (
    <div ref={divRef}></div>
  )
}

export default DangerouslySetHtmlContent
