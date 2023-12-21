import { useEffect, useState } from "react";
import { allowedCurrencies, fetchExchange } from "../servises/fetchCurrency";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  const [exchange, setExchange] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(exchange);
  console.log(currencyOptions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExchange();
        const filteredArray = data.filter((item) => {
          return allowedCurrencies.includes(item.cc);
        });
        setCurrencyOptions(allowedCurrencies);
        setExchange(filteredArray);
      } catch (error) {
        console.error("Error fetching exchange data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header exchange={exchange} />
      <Main currencyOptions={currencyOptions} />
    </>
  );
}

export default App;
