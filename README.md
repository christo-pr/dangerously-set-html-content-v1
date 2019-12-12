<center>
<h1>
⚠️⚠️⚠️
dangerously-set-html-content
⚠️⚠️⚠️
</h1>
</center>

> Render raw html on your own risk!

[![NPM](https://img.shields.io/npm/v/dangerously-set-html-content.svg)](https://www.npmjs.com/package/dangerously-set-html-content) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Context

React already have `dangerouslySetInnerHtml` prop to render raw html, and works pretty much well for almost all the cases, but what if your html has some `scripts` tags inside??

When you use `dangerouslySetInnerHtml` on a component, internally react is using the `innerHtml` property of the node to set the content, which for [safety purposes](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations) doesn't execute any javascript.

At the beginning this behavior seemed very odd to me (I mean the prop name contains the word `dangerously`, and also you need to pass an object with a `__html` propery, looks like they really encourage us not to use it), but it has totally sense now, but still doesn't solve my issue

After a little bit of search I found that the `document` has something called [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range), this API let you create a fragment of the document, so using that I created `dangerously-set-html-content`.

This React component renders html from a string, with the plus of executing all the js code that html contains!! 🎉

🚨🚨 **USE IT BY YOUR OWN RISK** 🚨🚨

## Install

```bash
yarn add dangerously-set-html-content
// or
// npm install --save dangerously-set-html-content
```

## Usage

```jsx
import React from 'react'

import InnerHTML from 'dangerously-set-html-content'

function Example {

  const html = `
    <div>This wil be rendered</div>
    <script>
      alert('testing')
    </script>

  `
  return (
    <InnerHTML html={html} />
  )
}
```

This will also work for scripts with the `src` attribute set it

## License

MIT © [christo-pr](https://github.com/christo-pr)
