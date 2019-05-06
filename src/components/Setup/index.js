import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import { authenticateLabel, folderInputPlaceholder } from '../../strings';
import { SetupSection } from './styles';

const Setup = ({ stage, authenticationUrl, folderInput, setFolderInput }) => (
  <SetupSection>
    {
      (() => {
        switch (stage) {
        case 1:
          return (
            <Button label={authenticateLabel} href={authenticationUrl} />
          );
        case 2:
          return (
            <Input
              placeholder={folderInputPlaceholder}
              value={folderInput}
              onChange={setFolderInput} />
          );
        }
      })()
    }
  </SetupSection>
);

Setup.propTypes = {
  stage: PropTypes.number,
  authenticateLabel: PropTypes.string,
  authenticationUrl: PropTypes.string,
  folderInput: PropTypes.string,
  setFolderInput: PropTypes.func
};

Setup.defaultProps = {
  stage: 1,
  authenticateLabel: '',
  authenticationUrl: '',
  folderInput: '',
  setFolderInput: () => {}
};

export default Setup;

