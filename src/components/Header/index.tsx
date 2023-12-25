import { memo } from 'react';
import NewLink from '@/components/NewLink';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #1a1b22;
  padding: 20px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

interface Props {}
function Header({}: Props) {
  return (
    <StyledHeader>
      <NewLink href="/" text="Coins List" />
      <NewLink href="/converter" text="Converter" />
    </StyledHeader>
  );
}
export default memo(Header);
