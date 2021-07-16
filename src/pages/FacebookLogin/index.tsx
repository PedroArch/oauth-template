import { FaFacebook } from 'react-icons/fa'

import './styles.scss'

function FacebookLogin() {
  return (
    <div id="facebook-page">
      <div className="content">
        <h1>Logado com o Facebook</h1>
        <FaFacebook size={50} color='#FFF' />
        <ul className="user-info">
          <li>Nome: Pedro Carvalho</li>
          <li>UserId: 00000</li>
          <li>Email: pedro@mail.com</li>
        </ul>
      </div>
    </div>
  )
}

export default FacebookLogin
