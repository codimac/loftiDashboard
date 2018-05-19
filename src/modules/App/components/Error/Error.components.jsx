import React from 'react';
import { history } from '@helpers/history.helpers';

import Wrapper from '@Shared/components/Wrapper/Wrapper.components';
import Button from '@Shared/components/Button/Button.components';

import './Error.styles';

export class Error extends React.Component {

  goToHome = ev => {
    history.push('/');
  }

  render() {
    return (
      <React.Fragment>
        <div className="flex justify-content-center align-items-center">
          <Wrapper title="Oups !" className="error">
            <div>
              <h3 className="mb-3">La page demandée n'existe pas</h3>
              <Button className="button" type="button" onClick={this.goToHome}>Retourner à l'accueil</Button>
            </div>
          </Wrapper>
        </div>
      </React.Fragment>
    );
  }

}

export default Error;
