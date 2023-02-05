import React, { Fragment, useState } from 'react';
import Decoration from '../components/Decoration';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.email === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Email cannot be empty',
        icon: 'error',
      });
    }
    if (form.password === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Email cannot be empty',
        icon: 'error',
      });
    }
    const checkBox = document.getElementById('customCheck1');
    if (checkBox.checked === false) {
      Swal.fire({
        title: 'Error!',
        text: 'You must aggree with terms & conditions',
        icon: 'error',
      });
    }

    setLoading(false);
  };
  return (
    <Fragment>
      <div className='d-flex'>
        <Decoration />
        <div className='col-6 d-flex flex-column justify-content-center align-content-center'>
          <div className='text-center'>
            <h2 className='text-warning'>Wellcome</h2>
            <span className='text-muted'>Log in into your account</span>
          </div>
          <form
            className='d-flex align-content-center justify-content-center'
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <div className='mt-3 col-6'>
              <div className='row d-flex justify-content-center align-content-center'>
                <div className='col-md-12 mb-2'>
                  <div className='form-group text-muted'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='text'
                      className='form-control form-control mt-2'
                      id='email'
                      placeholder='Masukkan alamat email'
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className='col-md-12 mb-2'>
                  <div className='form-group text-muted'>
                    <label htmlFor='newPassword'>New Password</label>
                    <input
                      type='password'
                      className='form-control form-control mt-2'
                      id='newPassword'
                      placeholder='New Password'
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className='custom-control custom-checkbox mb-3'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='customCheck1'
                  />
                  <label
                    className='ps-2 custom-control-label text-muted'
                    htmlFor='customCheck1'
                  >
                    I agree to terms & conditions
                  </label>
                </div>

                <div className='col-md-12 flex-column justify-content-center align-content-center mb-4'>
                  {loading ? (
                    <button
                      type='submit'
                      className='btn btn-warning col-12 text-white'
                      disabled
                    >
                      <span
                        className='spinner-border spinner-border-sm'
                        role='status'
                        aria-hidden='true'
                      />
                    </button>
                  ) : (
                    <button
                      type='submit'
                      className='btn btn-warning col-12 text-white'
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
          <div className='text-center'>
            <span className='text-muted'>Dont have Account? </span>
            <Link to='/register' className='text-decoration-none text-warning'>
              Sign Up Here
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
