import { ICoin } from '@/interfaces/coin';
import { Column, useTable } from 'react-table';
import { StyledTable, StyledTableBody, StyledTableHead } from './StyledTable';

interface IProps {
  data: ICoin[];
  columns: readonly Column<ICoin>[];
}

const Table = ({ data, columns }: IProps) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <StyledTable {...getTableProps()}>
      <StyledTableHead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </StyledTableHead>

      <StyledTableBody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </StyledTableBody>
    </StyledTable>
  );
};

export default Table;
