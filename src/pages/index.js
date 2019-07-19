import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'

import { testAction } from '../actions/testAction'
import styles from './index.styl'

class Index extends Component {

    render () {
        return (
            <div className={styles.root}>
                <h1>共点击了 {this.props.testReducer.data} 次</h1>
                <Button type="primary" onClick={this.props.testAction}>Test Redux</Button>
            </div>
        )
    }
}

const mapStateToProps = (reducer) => ({
    testReducer: reducer.testReducer
})
const mapDispatchToProps = (dispatch) => ({
    testAction: () => dispatch(testAction()),
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Index)
