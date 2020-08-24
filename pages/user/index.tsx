import {useSelector} from 'react-redux';
import {AppState} from 'storage/reducer';
import {useEffect} from 'react';
import {useRouter} from 'next/router';

const Admin = () => {
  // Props
  const state = useSelector((state: AppState) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (state.isLoggedIn) {
      router.replace('/user/dashboard');
    } else {
      router.replace('/signin');
    }
  }, [state.isLoggedIn]);

  return <p></p>;
};

export default Admin;
