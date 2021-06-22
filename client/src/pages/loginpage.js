import React from 'react';
import LoginButton from '../components/login/index';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
    </>
  );
}

export default App;