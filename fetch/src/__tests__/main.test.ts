import { screen } from "@testing-library/dom"
import { add } from "../main"

document.body.innerHTML = `
  <img id="img" src="logo.svg" />
  <p>Page has been open for <code id="counter" data-testid="counter">0</code> seconds.</p>
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Learn">
      Learn web development
    </a>
  </p>
`

it("adds 2 plus 2 and returns 4", () => {
  expect(add(2, 2)).toEqual(4)
})

it("starts at zero", () => {
  const counter = screen.getByTestId("counter")
  expect(counter).toHaveTextContent("0")
})

it.todo("shows 10 after 10 seconds")
