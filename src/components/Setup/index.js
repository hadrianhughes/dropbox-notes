import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { authenticateLabel } from '../../strings';
import { SetupSection } from './styles';

const Setup = ({ stage, authenticationUrl }) => (
  <SetupSection>
    {
      stage === 1 ?
        <Fragment>
          <Button label={authenticateLabel} href={authenticationUrl} />
        </Fragment>
        :
        <div />
    }
  </SetupSection>
);

Setup.propTypes = {
  stage: PropTypes.number,
  authenticateLabel: PropTypes.string,
  authenticationUrl: PropTypes.string
};

Setup.defaultProps = {
  stage: 1,
  authenticateLabel: '',
  authenticationUrl: ''
};

export default Setup;

