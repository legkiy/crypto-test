import NewLink from '@/components/NewLink';
import { IRootState } from '@/store';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #1a1b22;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

interface Props {}
function Header({}: Props) {
  const { number } = useSelector((state: IRootState) => state.counter);

  return (
    <StyledHeader>
      <NewLink href="/" text="Coins List" />
      <NewLink href="/converter" text="Converter" />
    </StyledHeader>
  );
}
export default Header;
