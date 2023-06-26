import Link from 'next/link';
import styled from 'styled-components';

const StyeldLink = styled(Link)`
  color: white;
  margin: 10px;
  text-decoration: none;
`;

interface IProps {
  href: string;
  text: string;
}
const NewLink = ({ href, text }: IProps) => {
  return <StyeldLink href={href}>{text}</StyeldLink>;
};
export default NewLink;
