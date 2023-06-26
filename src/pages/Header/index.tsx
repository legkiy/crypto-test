import NewLink from '@/components/NewLink';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #1a1b22;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

interface Props {}
function Header({}: Props) {
  return (
    <StyledHeader>
      <NewLink href="/" text="Coins List" />
      <NewLink href="/test" text="test" />
    </StyledHeader>
  );
}
export default Header;