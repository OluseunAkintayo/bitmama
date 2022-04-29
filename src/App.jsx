import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from './auth';
import Login from './pages/Login';
import Home from './pages/Home';
import {
  getUser, 
  // getGitUser
} from './redux/slice';


function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.profile);
  
  const checkUser = async () => {
    const user = supabase.auth.user();
    if (user) {
      dispatch(getUser(user.user_metadata));
    }
  }
  

  const githubAuth = async () => {
    await supabase.auth.signIn({
      provider: 'github',
    });
  }

  const logout = async () => {
    await supabase.auth.signOut();
  }
  
  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', () => checkUser());
  });

  // useEffect(() => {
  //   user && dispatch(getGitUser(user.user_metadata.user_name));
  // }, [user]);

  // logout();

  if (user) {
    return (
      <Home />
    )
  }

  return (
    <Login login={githubAuth} />
  )
}

export default App;
