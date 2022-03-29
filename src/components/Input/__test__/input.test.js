import { render, screen } from "@testing-library/react";
import Input from "../Input";

test('render label element depending on props', ()=>{
    render(<Input label="name"/>);
    const labelElement = screen.getByText(/name/i);
    expect(labelElement).toBeInTheDocument();
})

test('render input element depending on props', ()=>{
    render(<Input type="text" name="name"/>);
    const labelElement = screen.getByTestId("inputField");
    expect(labelElement).toBeInTheDocument();
})