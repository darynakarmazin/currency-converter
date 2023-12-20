import CurrencyRow from "../CurrencyRow/CurrencyRow";
import { Container, FormWrapper, Wrapper } from "./Main.styled";

function Main({ currencyOptions }) {
  return (
    <Container>
      <FormWrapper>
        <h2>Convert</h2>
        <Wrapper>
          <CurrencyRow currencyOptions={currencyOptions} />
          <div>=</div>
          <CurrencyRow currencyOptions={currencyOptions} />
        </Wrapper>
      </FormWrapper>
    </Container>
  );
}

export default Main;
