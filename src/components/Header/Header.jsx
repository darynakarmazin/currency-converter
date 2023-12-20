import { HeaderTag, List, Title } from "./Header.styles";

import { Container } from "../Container/Container.styled";

function Header({ exchange }) {
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
