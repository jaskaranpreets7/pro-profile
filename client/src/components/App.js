import React from 'react';
import '../style/App.css';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';

function App() {
  return (
    <div className="app-container">
      <ProfilePicture/>
      <ProfileDetails/>
    </div>
  );
}

export default App;
