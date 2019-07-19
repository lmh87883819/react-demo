import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'
import Immutable from 'immutable'

import { testAction } from '../actions/testAction'
import Http from '../api'
import styles from './index.styl'

class Index extends Component {
    state = {
        list: Immutable.List(),
    }

    componentDidMount () {
        this.updateList()
    }

    updateList = async () => {
        const res = await Http.get('', {amount: 3})
        this.setState({
            list: Immutable.fromJS(res)
        })
    }

    render () {
        const list = this.state.list.toJS()
        return (
            <div className={styles.root}>
                <h1>共点击了 {this.props.testReducer.data} 次</h1>
                <div>
                    <Button type="primary" onClick={this.props.testAction}>Test Redux</Button>
                    <Button type="primary" onClick={this.updateList} style={{marginLeft: 30}}>Update List</Button>
                </div>
                {list.map(item => (
                    <div key={item.name} className={styles.list}>
                        <div><span>name:</span> {item.name}</div>
                        <div><span>gender:</span>  {item.gender}</div>
                        <div><span>region:</span>  {item.region}</div>
                        <div><span>surname:</span>  {item.surname}</div>
                    </div>
                ))}
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
