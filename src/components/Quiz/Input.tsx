import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
const StyledOption = styled.div<{ selected: boolean }>`
  display: flex;
  padding: 16px;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  line-height: 16px;
  margin-bottom: 8px;
  background-color: #e5e7eb1f;
  border-radius: 5px;
  cursor: pointer;
  ${(props) =>
    props.selected
      ? `
      font-weight: bold;
      background-image: linear-gradient(to right, #ff7e5f, #feb47b); /* Inner solid background */
  `
      : ``};
`;

type InputProps = {
  register: UseFormRegister<FieldValues>;
  value: "correct" | "incorrect";
  type: string;
  text: string;
  checked?: boolean;
  onClick: (value: "correct" | "incorrect", optionKey: string) => void;
  optionKey: string;
};
const Input: React.FC<InputProps> = ({
  optionKey,
  register,
  value,
  type,
  text,
  checked,
  onClick,
}) => {
  const handleOnClick = (value: "correct" | "incorrect", optionKey: string) => {
    onClick(value, optionKey);
  };

  return (
    <StyledOption
      selected={checked ?? false}
      onClick={() => handleOnClick(value, optionKey)}
    >
      <label>{text}</label>
      <input
        hidden={true}
        checked={checked}
        type={type}
        value={value}
        {...register("option")}
      />
    </StyledOption>
  );
};
export default Input;
