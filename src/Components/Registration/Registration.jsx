import React, {useState} from 'react'
import {RegistrationForm, AuthenticationForm, BlockInfo} from "../index"


export default function Registration() {

  const [activeForm, setActiveForm] = useState('registration');
  return (
    <div className="content">
      <BlockInfo />
      <div className="block-registration">
        <div className="name-block-form">
        <div className='login-and-register-btn'>
            {activeForm === 'registration' ? (
                <button className="btn-registration" onClick={() => setActiveForm('authentication')}>Вход</button>
                ) : (
                <button className="btn-registration" onClick={() => setActiveForm('registration')}>Регистрация</button>
            )}
        </div>
        </div>
        {activeForm === 'registration' ? (
                    <RegistrationForm />
                  ) : (
                    <AuthenticationForm />
                  )}
      </div>
    </div>

  )
}

