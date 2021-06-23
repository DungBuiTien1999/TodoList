import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { axiosInstance, parseJwt } from '../utils';

export default function Login() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axiosInstance.post('/auth', data);
      if (res.data.authenticated) {
        localStorage.todoApp_accessToken = res.data.accessToken;
        
        const obj = parseJwt(res.data.accessToken);
        localStorage.todoApp_userId = obj.userId;

        history.push('/');
      } else {
        alert('Invalid login.');
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      //   console.log(error.config);
    }
  };

  //   console.log(watch('username'));
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <div className="fg">
          <input
            type="text"
            placeholder="username"
            {...register('username', { required: true })}
          />
          {errors.username && <span>*</span>}
        </div>
        <div className="fg">
          <input
            type="password"
            placeholder="password"
            {...register('password', { required: true })}
          />
          {errors.password && <span>*</span>}
        </div>
        <div className="fg mt-3">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
