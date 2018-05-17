import { connect } from 'react-redux';
import Sidebar from '@App/components/Sidebar/Sidebar.components';

import { getPromotion } from '@Promos/reducers/details.reducers';

const mapStateToProps = state => ({
  promotionId: getPromotion(state).year
});

export default connect(mapStateToProps, {})(Sidebar);
