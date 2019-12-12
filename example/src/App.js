import React from 'react'
import InnerHTML from 'dangerously-set-html-content'

export default function App() {

  const html = `
    <div>This wil be rendered</div>
    <script>
      alert('testing')
    </script>

  `

  return (
    <div>
      <InnerHTML html={html} />
    </div>
  );
}
