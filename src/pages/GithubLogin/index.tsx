import { FaGithub } from 'react-icons/fa'

import './styles.scss'

function GithubLogin() {
  return (
    <div id="github-page">
      <div className="content">
        <h1>Logado com o Github</h1>
        <FaGithub size={50} color='#FFF' />
        <ul className="user-info">
          <li>Nome: Pedro Carvalho</li>
          <li>UserId: 00000</li>
          <li>Email: pedro@mail.com</li>
        </ul>
      </div>
    </div>
  )
}

export default GithubLogin
