import React from 'react';

class ListPromos extends React.Component {

  render() {
    const { promos } = this.state;
    console.log('ok')
    return (
      <React.Fragment>
        <h1>Promotions</h1>
        {promos.map(promo => (
          <li key={promo.id}>
            {promo.label}
          </li>)
        )}
      </React.Fragment>
    );
  }
}

export default ListPromos;
