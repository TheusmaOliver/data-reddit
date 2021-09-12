import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";

test('deve iniciar o texto do botão como "Login with google"', () => {
  render(<Login />);
  const btnLogin = screen.getByText("Login with google");
  expect(btnLogin).toBeInTheDocument();
});
