import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #5b657c;
  color: white;
  font-size: 16px;
  border: 1px solid #495164;
  padding: 7px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
interface IProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: IProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
export default Button;
