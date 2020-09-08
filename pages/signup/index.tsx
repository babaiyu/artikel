import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {LayoutHome, Button} from 'components';
import {emailPattern} from 'helpers/regex';
import {userLoginAction} from 'storage/user/user.action';
import {AppState} from 'storage/reducer';
import {apiSignUp} from 'services/api';
import Link from 'next/link';

const SignUp = () => {
  // Props
  const stateUser = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  // State
  const [loading, setLoading] = useState(false);

  // Props function
  const onSubmit = (data: any) => {
    setLoading(true);
    apiSignUp(data)
      .then((res) => {
        console.log('RESPONSE LOGIN', res);
      })
      .catch((err) => {
        console.log('ERROR LOGIN', err);
      });
    // dispatch(userLoginAction(data));
    event.preventDefault();
  };

  // Life Cycle
  useEffect(() => {
    if (stateUser.isLoggedIn) {
      router.push('/user');
    }
  }, [stateUser.userLogin]);

  // Form Conf
  const {register, handleSubmit, errors} = useForm();

  // Render
  return (
    <LayoutHome activeNum={3} title="Masuk">
      <div className="md:flex md:mx-3 content-center justify-center w-full items-center mt-20">
        <div className="rounded overflow-hidden shadow-md p-6 border">
          <p className="font-bold text-2xl mb-8">Daftar</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <p className="mb-1">Nama Lengkap</p>
              <input
                name="fullname"
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200"
                placeholder="Nama Lengkap"
                ref={register({required: true})}
              />
              {errors.email && (
                <span className="italic text-red-500">
                  Nama Lengkap harus diisi
                </span>
              )}
            </div>
            <div className="mb-3">
              <p className="mb-1">Email</p>
              <input
                name="email"
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200"
                placeholder="Email"
                type="email"
                ref={register({required: true, pattern: emailPattern})}
              />
              {errors.email && (
                <span className="italic text-red-500">
                  Validasi email gagal
                </span>
              )}
            </div>
            <div className="mb-5">
              <p className="mb-1">Password</p>
              <input
                name="password"
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200"
                placeholder="Password"
                type="password"
                ref={register({required: true, minLength: 6})}
              />
              {errors.password && (
                <span className="italic text-red-500">
                  Password minimal 6 karakter
                </span>
              )}
            </div>
            <div className="flex flex-row justify-between items-center">
              <small>Lupa password?</small>
              <Link href="/signin">
                <a href="#" className="hover:underline">
                  Buat akun baru
                </a>
              </Link>
            </div>
            <div className="flex items-end justify-center content-center text-center self-center mt-8">
              <div className="w-8/12">
                <Button title="Masuk" full />
              </div>
            </div>
          </form>
        </div>
      </div>
    </LayoutHome>
  );
};

export default SignUp;
