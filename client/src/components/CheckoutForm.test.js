import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />);
    const formHeader = screen.getByText(/react plants/i);
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const submitButton = screen.getByTestId("buttonElement");
    fireEvent.click(submitButton);

    const successMessage = screen.getByText(/you have ordered some plants!/i);
    expect(successMessage).toBeInTheDocument();
});
