import React from 'react';
import './style.scss';
import Registrationform from './components/Registrationform.jsx';
import FormikRegistrationform from './components/FormikRegistrationform';

export const App = () => {
  return (
    <>
      <div className="p-2">
        {/* <Registrationform /> */}
        <FormikRegistrationform />
      </div>
    </>
  );
};
