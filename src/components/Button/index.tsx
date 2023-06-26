import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #f44336;
  color: white;
  font-size: 16px;
`;
interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};
export default Button;
