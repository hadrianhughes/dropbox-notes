import styled from 'styled-components';
import { spacing } from '../../styles/settings/layout';
import Button from '../Button';

export const SetupSection = styled.section`
  margin: ${spacing(2)} 0;
  text-align: center;
`;

export const SetupButton = styled(Button)`
  display: block;
  margin: ${spacing(2)} auto 0;
`;

