import './App.css';
import Login from './components/login.js';
import SignUp from './components/signup.js';
import SignInOutContainer from './containers/index.js';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <SignUp/> */}
      <SignInOutContainer/>
    </div>
  );
}

export default App;
