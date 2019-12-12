import React, { useEffect, useRef } from 'react'

function DangerouslySetHtmlContent(props) {
  const { html } = props
  const divRef = useRef(null)

  useEffect(() => {
    const slotHtml = document.createRange().createContextualFragment(html) // Create a 'tiny' document and parse the html string
    divRef.current.appendChild(slotHtml) // Append it so it can be executed
  }, [])


  return (
    <div ref={divRef}></div>
  )
}

export default DangerouslySetHtmlContent
