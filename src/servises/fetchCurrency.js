import axios from "axios";
axios.defaults.baseURL = "https://api.apilayer.com/exchangerates_data/latest?";
const access_key = "08WNZIF50bDbaNNw0FSTX7TbX5rVOV4V";

export async function fetchExchange(base, symbols) {
  try {
    const response = await axios(`symbols=${symbols}&base=${base}`, {
      params: {
        apikey: access_key,
      },
    });
    return response.data;
  } catch (error) {
    console.error("There was a problem with the Axios request", error);
  }
}

export const allowedCurrencies = ["UAH", "USD", "EUR", "PLN", "GBP", "CZK"];
export const headerCurrencies = ["USD", "EUR", "PLN", "GBP", "CZK"];
