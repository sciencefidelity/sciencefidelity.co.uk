import * as React from "react"
import { render, screen } from "@testing-library/react"
import Index from "pages/Index"

describe("Renders the Home page", () => {
  test("Renders the correct content on the home page", () => {
    render(<Index />)
    screen.getByText(/Hello world!/i)
  })
})
