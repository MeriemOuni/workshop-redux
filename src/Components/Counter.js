import React from 'react'
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';
import { decrement, increment } from '../Redux/actions';

const Counter = (props) => {
    // console.log(props)
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div className='counter-container'>
            <Button variant="info" onClick={() => dispatch(increment())} >Increment</Button>
            <span className='counter'>{counter}</span>
            <Button variant="info"onClick={() => dispatch(decrement())} >Decrement</Button>
        </div>
    )
}

export default Counter

// Without HOOKS
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Counter)
