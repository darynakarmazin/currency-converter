import axios from "axios";
axios.defaults.baseURL =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

export async function fetchExchange() {
  try {
    const response = await axios();
    return response.data;
  } catch (error) {
    console.error("There was a problem with the Axios request", error);
  }
}
