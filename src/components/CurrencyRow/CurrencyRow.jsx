import { Input, InputWraper, Select } from "./CurrencyRow.styled";

function CurrencyRow({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) {
  return (
    <InputWraper>
      <Input type="number" value={amount} onChange={onChangeAmount} />
      <Select value={selectedCurrency} onChange={onChangeCurrency}>
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
