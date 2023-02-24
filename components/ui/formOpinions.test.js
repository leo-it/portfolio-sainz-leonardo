import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { FormOpinions } from "./FormOpinions";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.post("/opinions", (req, res, ctx) => {
    return res(ctx.status(201));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("cuando el form es montado", () => {
  beforeEach(() => render(<FormOpinions />));
  it("debe renderizar nombre y descripcion", () => {
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descripcion/i)).toBeInTheDocument();
    /* expect(screen.getBy(/★/i)).toBeInTheDocument(); */
  });

  it("debe existir boton submit", () => {
    expect(
      screen.getByRole("button", { name: /Publicar/i })
    ).toBeInTheDocument();
  });
});

describe("luego de hacer submit sin valores requeridos", () => {
  beforeEach(() => render(<FormOpinions />));
  it("validacion de mensajes", async () => {
    expect(screen.queryByText(/Campo requerido/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Publicado correctamente!/i)
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Publicar/i }));
    //expect(getByTestId("dateError")).toHaveTextContent("Campo requerido");
    //expect(screen.getByText(/este campo/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.findByTestId("alert-submited")));

  });
});
