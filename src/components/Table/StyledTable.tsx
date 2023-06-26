import styled from 'styled-components';

export const StyledTable = styled.table`
  margin: 20px auto;
  box-shadow: 0 0 5px black;
  border-collapse: collapse;
  border-radius: 4px;
`;

export const StyledTableHead = styled.thead`
  border-bottom: 1px solid #353535;
  th {
    padding: 10px;
  }
`;

export const StyledTableBody = styled.tbody`
  td {
    padding: 10px 20px;
  }
`;
