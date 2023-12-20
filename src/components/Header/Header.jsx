import { useEffect, useState } from "react";
import { HeaderTag, List, Title } from "./Header.styles";
import { fetchExchange } from "../../servises/fetchCurrency";
import { Container } from "../Container/Container.styled";

function Header() {
  const [exchange, setExchange] = useState([]);
  console.log(exchange);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExchange();
        const filteredArray = data.filter((item) => {
          const allowedCurrencies = ["USD", "EUR", "PLN", "GBP", "CZK"];
          return allowedCurrencies.includes(item.cc);
        });
        setExchange(filteredArray);
      } catch (error) {
        console.error("Error fetching exchange data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <HeaderTag>
      <Container>
        <Title>Currency Conversion</Title>{" "}
        <List>
          {exchange.map((item) => {
            return (
              <li key={item.r030}>
                {item.rate.toFixed(2)} <span>{item.cc}</span>
              </li>
            );
          })}
        </List>
      </Container>
    </HeaderTag>
  );
}

export default Header;
