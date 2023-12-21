import { useEffect, useState } from "react";
import CurrencyRow from "../CurrencyRow/CurrencyRow";
import { Container, FormWrapper, Wrapper } from "./Main.styled";
import { allowedCurrencies, fetchExchange } from "../../servises/fetchCurrency";

function Main({ exchange }) {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [exchngeRate, setExchangeRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [amountInfromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInfromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchngeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchngeRate;
  }

  useEffect(() => {
    if (exchange.length > 0) {
      setCurrencyOptions(allowedCurrencies);
      setFromCurrency("UAH");
      setToCurrency(exchange[0].currency);
      setExchangeRate(exchange[0].rate);
    }
  }, [exchange]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExchange(fromCurrency, toCurrency);
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange data:", error);
      }
    };
    fetchData();
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }
  return (
    <Container>
      <FormWrapper>
        <h2>
          You will get : {toAmount.toFixed(2)} {toCurrency}
        </h2>
        <Wrapper>
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            amount={fromAmount}
            onChangeAmount={handleFromAmountChange}
          />
          <div>=</div>
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            amount={toAmount}
            onChangeAmount={handleToAmountChange}
          />
        </Wrapper>
      </FormWrapper>
    </Container>
  );
}

export default Main;
