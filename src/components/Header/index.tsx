import NewLink from '@/components/NewLink';
import { memo } from 'react';
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
      <NewLink href="/converter" text="Converter" />
    </StyledHeader>
  );
}
export default memo(Header);
