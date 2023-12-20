import { Input, InputWraper, Select } from "./CurrencyRow.styled";

function CurrencyRow({ currencyOptions }) {
  return (
    <InputWraper>
      <Input type="number" />
      <Select>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </InputWraper>
  );
}

export default CurrencyRow;
