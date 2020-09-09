import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { feature1ActionRequest } from '../../store/actions/Feature1';

class Page extends React.Component {
  componentDidMount() {
    const { feature1ActionRequest } = this.props;
    feature1ActionRequest();
  }

  render(){
    const { ReducerExample } = this.props;

    return (
      <div>
        <p>Page Page of inner app 1</p>
        {ReducerExample.data ? (
          <p>api data that are in the Microfrontend store:  <b>{ReducerExample.data.toString()}</b></p>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ ReducerExample }) => ({
  ReducerExample,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      feature1ActionRequest,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Page);
