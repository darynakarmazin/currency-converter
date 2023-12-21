import { HeaderTag, List, Title } from "./Header.styles";

import { Container } from "../Container/Container.styled";
import { newDate } from "../../servises/createDate";
import { headerCurrencies } from "../../servises/fetchCurrency";

function Header({ exchange }) {
  const date = newDate();

  const exchangeRate = exchange.filter((item) => {
    return headerCurrencies.includes(item.currency);
  });

  return (
    <HeaderTag>
      <Container>
        <div>
          <Title>Currency Conversion</Title>
          <p>{date}</p>
        </div>
        <List>
          {exchangeRate.map((item) => {
            return (
              <li key={item.currency}>
                {(1 / item.rate).toFixed(2)} <span>{item.currency}</span>
              </li>
            );
          })}
        </List>
      </Container>
    </HeaderTag>
  );
}

export default Header;
