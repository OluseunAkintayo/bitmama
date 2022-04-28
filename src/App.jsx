import { useState, useEffect } from 'react';
import { supabase } from './auth';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
  const [user, setUser] = useState(null); 
  
  const checkUser = async () => {
    const user = supabase.auth.user();
    setUser(user);
  }

  const githubAuth = async () => {
    await supabase.auth.signIn({
      provider: 'github',
    });
  }

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  }

  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', () => checkUser());
  });

  if(user) {
    return (
      <Home />
    )
  }
  return (
    <Login login={githubAuth} />
  )
}

export default App;
