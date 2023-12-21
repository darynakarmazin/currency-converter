import { HeaderTag, List, Title } from "./Header.styles";

import { Container } from "../Container/Container.styled";
import { newDate } from "../../servises/createDate";

function Header({ exchange }) {
  const date = newDate();

  return (
    <HeaderTag>
      <Container>
        <div>
          <Title>Currency Conversion</Title>
          <p>{date}</p>
        </div>
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
