import React, {Component} from 'react';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from "../../components/CounterControl/CounterControl";
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions'
// import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        }
    }

    counterHandler = (action, value) =>{
        switch (action) {
            case "inc":
                this.setState((prevState) => {return {counter:prevState.counter + 1}})
                break;
            case "dec":
                this.setState((prevState) => {return {counter:prevState.counter - 1}})
                break;
            case "add":
                this.setState((prevState) => {return {counter:prevState.counter + value}})
                break;
            case "sub":
                this.setState((prevState) => {return {counter:prevState.counter - value}})
                break;
        }

    }

    render() {
        return (
            <div>
                {/*把state影射成props*/}
                <CounterOutput value = {this.props.ctr} />
                {/*<CounterOutput value = {this.state.counter}/>*/}
                <CounterControl label = "Increment" clicked = {this.props.onIncrementCounter}/>
                <CounterControl label = "Decrement" clicked = {this.props.onDecrementCounter}/>
                <CounterControl label = "Add 5" clicked = {this.props.onAddCounter}/>
                <CounterControl label = "Sub 5" clicked = {this.props.onSubCounter}/>
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Counter.propTypes = {};

//把状态影射成props
const mapStateToProps = state => {
    return {
        //影射的是reducer里的counter
        ctr: state.counter,
        storedResults: state.results
    };
}

//
const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type:actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type:actionTypes.ADD, value: 5}),
        onSubCounter: () => dispatch({type:actionTypes.SUB, value: 5}),
        onStoreResult:() => dispatch({type:actionTypes.STORE_RESULT}),
        onDeleteResult:(id) => dispatch({type:actionTypes.DELETE_RESULT, resultElId: id})
    };
}

//把创状态影射成属性
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
