import React from 'react';
import { connect } from 'umi';
// import { formatMessage } from 'umi';
import { Button } from 'antd';

import { createStateSelector } from '@/redux/actions/home';

import styles from './index.less';

const Content = React.memo(props => {
  // const {  } = props;
  // console.log(props);
  return (
    <div className={styles.container}>
      <Button>Home</Button>
    </div>
  );
});

Content.propTypes = {};

Content.defaultProps = {};

const [stateSelector, setStateSelector] = createStateSelector('');

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading,
    state: stateSelector(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // dispatch, // 默认不打开，在这个函数里处理 dispatch
    setState: setStateSelector(dispatch),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  // const { location } = ownProps;

  return {
    ...stateProps,
    ...dispatchProps,
  };
}

const Page = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Content);

Page.title = 'page.index.title';

export default Page;
