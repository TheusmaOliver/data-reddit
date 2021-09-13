import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";

describe("Login Component", () => {
  test('deve iniciar o texto do botão como "Login with google"', () => {
    render(<Login />);
    const btnLogin = screen.getByText("Login with google");
    expect(btnLogin).toBeInTheDocument();
  });
  test("deve conter a classe login-section__button no botão", () => {
    render(<Login />);
    const btnLogin = screen.getByText("Login with google");
    expect(btnLogin).toHaveClass("login-section__button");
  });
});
