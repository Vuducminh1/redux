import logo from './logo.svg';
import { connect } from "react-redux";
import axios from 'axios';
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"

//import store from './redux/store';


import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './components/Home';

function App(props) {
  const dispatch = useDispatch();

  const newCount = useSelector(
    (state) => {
      return state.counter.count
    }
  )
  const handleIncrease = () => {
    dispatch(increaseCounter())
    // props.increaseCounter()
    // store.dispatch({
    //   type : 'test',
    //   payload: {'name':'Minh'}
    // })

  }

  const handleDecrease = () => {
    props.decreaseCounter()
  }




  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React and Hoi Dan IT!</h1>
    //     <div>Count: {newCount}</div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => handleDecrease()}>Decrease Count</button>

    //   </header>
    // </div>
    <Home/>
  );
}

//map state (redux store) + props react
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
