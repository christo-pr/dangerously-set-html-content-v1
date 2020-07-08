import React, { useEffect, forwardRef } from 'react'

const DangerouslySetHtmlContent = forwardRef((props, ref) {
  const { html, ...rest } = props

  useEffect(() => {
    if (!html) return

    const slotHtml = document.createRange().createContextualFragment(html) // Create a 'tiny' document and parse the html string
    ref.current.innerHTML = '' // Clear the container
    ref.current.appendChild(slotHtml) // Append the new content
  }, [html])


  return (
    <div {...rest} ref={ref}></div>
  )
})

export default DangerouslySetHtmlContent
