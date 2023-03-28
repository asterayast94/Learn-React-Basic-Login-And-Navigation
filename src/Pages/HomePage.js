import React from 'react';

// export default function Goats(props) {
import {
  sum,
  LogOut,
  checkUserLogedInStatus,
  ShowText,
} from '../component/sessionManager.js';
export default function (props) {
  let [authMode, setAuthMode] = React.useState('home');
  checkUserLogedInStatus();

  if (authMode === 'home') {
    return (
      <div className="Auth-form-container">
        <h3 className="Auth-form-title">Welcome Home Boy From Home Page</h3>

        <button onClick={LogOut}> LogOut </button>
      </div>
    );
  }
}
