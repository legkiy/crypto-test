import { ICoinsATH } from '@/interfaces/coin';
import { styled } from 'styled-components';

const StyledATHTooltip = styled.td`
  position: absolute;
  border-radius: 5px;
  box-shadow: 0 0 5px black;
  width: max-content;
  margin: 0 10px;
  padding: 5px 10px;
  top: -18px;
`;

interface IProps {
  coin: ICoinsATH;
}

const ATHTooltip = ({ coin }: IProps) => {
  const calculateFromAndToATH = () => {
    const fromAth =
      ((coin.price.USD - coin.athPrice.USD) / coin.athPrice.USD) * 100;
    const toAth = ((coin.athPrice.USD - coin.price.USD) / coin.price.USD) * 100;

    return { fromAth, toAth };
  };

  return (
    <StyledATHTooltip>
      <table>
        <thead>
          <tr>
            <th>From ATH</th>
            <th>To ATH</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{calculateFromAndToATH().fromAth.toFixed(2)}</td>
            <td>{calculateFromAndToATH().toAth.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </StyledATHTooltip>
  );
};
export default ATHTooltip;
