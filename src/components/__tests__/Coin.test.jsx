// eslint-disable-next-line no-unused-vars
import * as React from "react";
import TestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Coin from "../Coin";

describe("Coin Component Tests", () => {
  const coin = {
    id: "1",
    market_cap_rank: 1,
    image: "https://example.com/image.png",
    name: "Bitcoin",
    symbol: "BTC",
    current_price: 50000,
  };

  // Teste para verificar se o componente renderiza corretamente quando a variação percentual do preço nas últimas 24 horas é positiva
  it("renders correctly when price_change_percentage_24h is positive", () => {
    const positiveCoin = { ...coin, price_change_percentage_24h: 5 };

    const tree = TestRenderer.create(
      <MemoryRouter>
        <Coin coin={positiveCoin} />
      </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  // Teste para verificar se o componente renderiza corretamente quando a variação percentual do preço nas últimas 24 horas é negativa
  it("renders correctly when price_change_percentage_24h is negative", () => {
    const negativeCoin = { ...coin, price_change_percentage_24h: -5 };

    const tree = TestRenderer.create(
      <MemoryRouter>
        <Coin coin={negativeCoin} />
      </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  // Teste para verificar se o nome e o símbolo da moeda são renderizados corretamente
  it("renders coin name and symbol correctly", () => {
    render(
      <MemoryRouter>
        <Coin coin={coin} />
      </MemoryRouter>
    );

    expect(screen.getByText(coin.name)).toBeInTheDocument();
    expect(screen.getByText(`(${coin.symbol})`)).toBeInTheDocument();
  });

  // Teste para verificar se a imagem da moeda é renderizada corretamente
  it("renders coin image correctly", () => {
    render(
      <MemoryRouter>
        <Coin coin={coin} />
      </MemoryRouter>
    );

    expect(screen.getByAltText(coin.name)).toHaveAttribute("src", coin.image);
  });

});
