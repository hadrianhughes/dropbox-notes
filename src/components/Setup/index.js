import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import { authenticateLabel, folderInputPlaceholder, setFolderLabel } from '../../strings';
import { SetupSection, SetupButton } from './styles';

const Setup = ({
  stage,
  authenticationUrl,
  folderInput,
  onFolderChange,
  onSubmitFolder,
}) => (
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
            <Fragment>
              <Input
                placeholder={folderInputPlaceholder}
                value={folderInput}
                onChange={onFolderChange} />
              <SetupButton label={setFolderLabel} onClick={onSubmitFolder} />
            </Fragment>
          );
        case 3:
          return <p>All set up!</p>;
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
  onFolderChange: PropTypes.func,
  onSubmitFolder: PropTypes.func,
};

Setup.defaultProps = {
  stage: 1,
  authenticateLabel: '',
  authenticationUrl: '',
  folderInput: '',
  onFolderChange: () => {},
  onSubmitFolder: () => {},
};

export default Setup;

