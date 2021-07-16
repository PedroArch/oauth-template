import { FaGoogle } from 'react-icons/fa'

import './styles.scss'

function GoogleLogin() {
  return (
    <div id="google-page">
      <div className="content">
        <h1>Logado com o Google</h1>
        <FaGoogle size={50} color='#FFF' />
        <ul className="user-info">
          <li>Nome: Pedro Carvalho</li>
          <li>UserId: 00000</li>
          <li>Email: pedro@mail.com</li>
        </ul>
      </div>
    </div>
  )
}

export default GoogleLogin
