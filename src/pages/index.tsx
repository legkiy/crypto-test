import styled from 'styled-components';

const HomeWrapper = styled.div`
  h1 {
    color: red;
  }
`;

export default function Home() {
  return (
    <>
      <HomeWrapper>
        <h1>Styled Components</h1>
      </HomeWrapper>
    </>
  );
}
