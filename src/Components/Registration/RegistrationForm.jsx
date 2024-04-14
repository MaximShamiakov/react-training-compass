import React, {useState} from "react";
import { API_URL } from '../../config'

export default function RegistrationForm(props) {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()
  const [email, setEmail] = useState()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const registration = await fetch(`${API_URL}/register/`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password2,
      }),
    })
    if (registration.ok) {
      // window.location.href = 'http://localhost:3000/trainingCompass/'
    }
    else{
      alert('что-тщ пошло не так')
      setUsername('')
      setPassword('')
      setPassword2('')
      setEmail('')
    }
  }

    return (
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            className="text-style"
            placeholder="Имя пользователя"
          />
          <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="text-style"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="text-style"
            placeholder="Пароль"
          />
          <input
            type="password"
            value={password2}
            onChange={(e)=> setPassword2(e.target.value)}
            className="text-style"
            placeholder="Повторите пароль"
          />
          <div className="block-button">
              <button type="submit" className="btn">
                  Зарегистрироваться
              </button>
          </div>
        </form>
    )
}