import styled from "styled-components";

interface ButtonProps {
  color: string;
}

export const ButtonExample: React.FC<ButtonProps> = ({ color }) => {
  return <StyledButton color={color}>Click Me</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: ${props => props.color};
  font-size: 16px;
  padding: 10px 15px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #eee;
  }

  &:active {
    transform: scale(0.99);
  }
`;
