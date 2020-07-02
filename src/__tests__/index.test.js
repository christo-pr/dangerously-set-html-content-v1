import React from "react";
import { JSDOM } from "jsdom"
import { render } from "@testing-library/react"

import InnerHTML from "../index";

const dom = new JSDOM()

global.window = dom.window
global.document = dom.window.document
window.alert = jest.fn(() => {})

describe("<DangerousleSetHtmlContent />", () => {

  test("Should render correctly no props", () => {
    expect(() => {
      render(<InnerHTML />)
    }).not.toThrow()
  })

  test("Should render correctly with html prop", () => {
    const html = `
      <div>This wil be rendered</div>
      <script>
        alert('testing')
      </script>
    `
    expect(() => {
      render(<InnerHTML html={html}/>)
    }).not.toThrow()
  })

  test("Should render children properly from string", () => {
    const html = `
      <div data-testid="test">Test html</div>
    `
    const { queryByTestId } = render(<InnerHTML html={html} />)

    expect(queryByTestId("test")).not.toBe(null)
    expect(queryByTestId("test").textContent).toBe("Test html")
  })

  test("Should render children properly from string with javascript", () => {
    const html = `
      <div data-testid="test">Test html</div>
      <script>
        window.alert('test')
      </script>
    `
    const { container } = render(<InnerHTML html={html} />)

    expect(container.querySelector("script")).not.toBe(null)
    expect(container.querySelector("script").textContent.trim()).toBe("window.alert('test')")
  })

  test("Should pass props to the container div element", () => {

    const { container } = render(<InnerHTML html={"<div id='inner'>test</div>"} className="outer"/>)

    expect(container.querySelector('#inner')).not.toBe(null)
    expect(container.querySelector('.outer')).not.toBe(null)
  })


})

