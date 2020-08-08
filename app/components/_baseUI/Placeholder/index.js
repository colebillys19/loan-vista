import styled from 'styled-components';

const Placeholder = styled.div`
  border: 0.3rem solid #ccc;
  height: ${({ height }) => height || '6rem'};
  width: ${({ width }) => width || '100%'};
`;

export default Placeholder;
