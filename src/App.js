import React from 'react'
import Header from './Header'
import Painel from './Painel'

function App() {

  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState(null)

  const handleClick = async () => {
    setAtivo(!ativo)
    const response = await fetch("http://internal-api.dividendos.me:1124/Notification", {
      headers: {
        Accept: "application/json",
        Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyIwMzRkMDM3OC05YzcyLTRjMWYtYTM4MS04NzJmOTFjMWRlMDMiLCIwMzRkMDM3OC05YzcyLTRjMWYtYTM4MS04NzJmOTFjMWRlMDMiXSwianRpIjoiNjA5ODM0OTE2ZWNhNDIyOTk0NDNmMTg0NDA3YzEyZDMiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYyNTc0OTU1OSwiZXhwIjoxNzgzNDI5NTU5LCJpYXQiOjE2MjU3NDk1NTksImlzcyI6IkRpdmlkZW5kb3MiLCJhdWQiOiJEaXZpZGVuZG9zIn0.5oG9uJif-CJXU8LOMJ7my7QUuSv7fPWyv4uNpkUc1tQ"
      }
    })
    const json = await response.json()
    setDados(json)
  }

  return (
    <>
      <Header event={handleClick} />
      <Painel stateBtn={ativo} dados={dados} />
    </>
  )
}

export default App;
