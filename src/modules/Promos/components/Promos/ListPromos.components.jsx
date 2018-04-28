import React from 'react';

class ListPromos extends React.Component {
  constructor() {
    super();
    this.state = {
      promos: [
        {id: 1, label: '2018'},
        {id: 2, label: '2019'},
        {id: 3, label: '2020'}
      ]
    };
  }

  render() {
    const { promos } = this.state;
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
