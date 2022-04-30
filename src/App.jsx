import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from './auth';
import Login from './pages/Login';
import Home from './pages/Home';
import {
  getUser,
  getGitUser,
  getRepos,
} from './redux/slice';

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  
  const checkUser = async () => {
    const loggedInUser = supabase.auth.user();
    if (loggedInUser) {
      setUser(loggedInUser.user_metadata);
      dispatch(getUser(loggedInUser));
    }
  }
  
  const login = async () => {
    await supabase.auth.signIn({
      provider: 'github',
    });
  }
  
  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', () => checkUser());
  }, [checkUser]);

  useEffect(() => {
    if (user !== null) {
      dispatch(getGitUser(user.user_name));
    }
  });

  useEffect(() => {
    if (user !== null) {
      dispatch(getRepos(user.user_name));
    };
  });

  if (user) {
    return (
      <Home />
    )
  }

  return (
    <Login login={login} />
  )
}

export default App;
