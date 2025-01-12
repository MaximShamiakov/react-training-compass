import React, {useState} from "react";
import { API_URL } from '../../config'



export default function AuthenticationForm() {

  const [name, setName] = useState()
  const [password, setPassword] = useState()


  const handleSubmit = async(e) => {
    e.preventDefault()
    const authorization = await fetch(`${API_URL}/login_view/`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, password})
    })
    if (authorization.ok) {
      window.location.href = 'http://localhost:3000/trainingCompass/'
    }
    else{
      alert('не верный логин или пароль')
      setName('')
      setPassword('')
    }
  }

  return (
        <form  className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="text-style"
            placeholder={"Имя"} required/>
          <input
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="text-style"
            placeholder={"Пороль"} required/>
          <div className="block-button">
            <button type="submit" className="btn">
                Вход
            </button>
          </div>
        </form>
  )
}

