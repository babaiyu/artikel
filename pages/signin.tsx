import {useForm} from 'react-hook-form';
import {LayoutHome, Button} from '../components';
import {emailPattern} from 'helpers/regex';

const SignIn = () => {
  // Form Conf
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);

  // Render
  return (
    <LayoutHome activeNum={3} title="Masuk">
      <div className="md:flex md:mx-3 content-center justify-center w-full items-center mt-20">
        <div className="rounded overflow-hidden shadow-md p-6 border">
          <p className="font-bold text-2xl mb-8">Masuk</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <p className="mb-1">Email</p>
              <input
                name="email"
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200"
                placeholder="Email"
                type="email"
                ref={register({required: true, pattern: emailPattern})}
              />
              {errors.email && <span className="italic text-red-500">Enter valid email</span>}
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
              {errors.password && <span className="italic text-red-500">Min length is 6</span>}
            </div>
            <div className="flex flex-row justify-between items-center">
              <div>
                <label className="switch">
                  <input name="remember_me" type="checkbox" ref={register} />
                  <span className="slider round"></span>
                </label>
                <small className="ml-3">remember me</small>
              </div>
              <small>forgot password?</small>
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

export default SignIn;
