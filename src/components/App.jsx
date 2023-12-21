import { useEffect, useState } from "react";
import { allowedCurrencies, fetchExchange } from "../servises/fetchCurrency";
import Header from "./Header/Header";
import Main from "./Main/Main";
const base = "UAH";
const symbols = "UAH, USD, EUR, PLN, GBP, CZK";

function App() {
  const [exchange, setExchange] = useState([]);
  console.log(exchange);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExchange(base, symbols);
        console.log(data);
        let arrayFromObject = Object.entries(data.rates).map(
          ([currency, rate]) => ({ currency, rate })
        );
        const filteredArray = arrayFromObject.filter((item) => {
          return allowedCurrencies.includes(item.currency);
        });
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
      <Main exchange={exchange} />
    </>
  );
}

export default App;
