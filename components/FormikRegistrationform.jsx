import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function FormikRegistrationform() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });

  const {
    handleSubmit,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleReset,
    values,
  } = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  return (
    <div>
      <div className=" row d-flex justify-content-center pt-5">
        <div className="col-4">
          <div className="card bg-light mb-3">
            <div className="card-header text-white bg-info">
              Registration Form
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    name="fullname"
                    type="text"
                    className={
                      'form-control' +
                      (errors.fullname && touched.fullname ? ' is-invalid' : '')
                    }
                    onChange={handleChange}
                    value={values.fullname}
                  />
                  <div className="invalid-feedback">
                    {errors.fullname && touched.fullname
                      ? errors.fullname
                      : null}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="username"> Username </label>
                  <input
                    name="username"
                    type="text"
                    className={
                      'form-control' +
                      (errors.username && touched.username ? ' is-invalid' : '')
                    }
                    onChange={handleChange}
                    value={values.username}
                  />
                  <div className="invalid-feedback">
                    {errors.username && touched.username
                      ? errors.username
                      : null}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email"> Email </label>
                  <input
                    name="email"
                    type="email"
                    className={
                      'form-control' +
                      (errors.email && touched.email ? ' is-invalid' : '')
                    }
                    onChange={handleChange}
                    value={values.email}
                  />
                  <div className="invalid-feedback">
                    {errors.email && touched.email ? errors.email : null}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password"> Password </label>
                  <input
                    name="password"
                    type="password"
                    className={
                      'form-control' +
                      (errors.password && touched.password ? ' is-invalid' : '')
                    }
                    onChange={handleChange}
                    value={values.password}
                  />
                  <div className="invalid-feedback">
                    {errors.password && touched.password
                      ? errors.password
                      : null}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword"> Confirm Password </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    className={
                      'form-control' +
                      (errors.confirmPassword && touched.confirmPassword
                        ? ' is-invalid'
                        : '')
                    }
                    onChange={handleChange}
                    value={values.confirmPassword}
                  />
                  <div className="invalid-feedback">
                    {errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : null}
                  </div>
                </div>

                <div className="form-group form-check">
                  <input
                    name="acceptTerms"
                    type="checkbox"
                    className={
                      'form-check-input' +
                      (errors.acceptTerms && touched.acceptTerms
                        ? ' is-invalid'
                        : '')
                    }
                    onChange={handleChange}
                    value={values.acceptTerms}
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    I have read and agree to the Terms
                  </label>
                  <div className="invalid-feedback">
                    {errors.acceptTerms && touched.acceptTerms
                      ? errors.acceptTerms
                      : null}
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-info">
                    Register
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning float-right"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
