import { render, screen } from "@testing-library/react";
import Heading from "../heading";

test('render of Header component', ()=>{
    render(<Heading heading="login form" />);
    const headingElement = screen.getByText(/login form/i);
    expect(headingElement).toBeInTheDocument();
})