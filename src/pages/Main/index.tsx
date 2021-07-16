import { useState } from 'react'
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa'

import './styles.scss'

function Main() {
  const [userFB, setUserFB] = useState()
  const [userGG, setUserGG] = useState()
  const [userGH, setUserGH] = useState()

  async function handleFacebookAuth (){
  }

  async function handleGoogleAuth (){
  }

  async function handleGithubAuth (){
  }

  return (
    <div id="main-page">
      <div className="content">
        <h1>Escolha o tipo de login:</h1>
        <div className="buttons">
          <button
           type="button" 
           className="facebook-button"
           onClick={handleFacebookAuth}
           >
            <FaFacebook size={20} color='#FFF' />
            Faça login com o Facebook
          </button>
          <button
           type="button" 
           className="google-button"
           onClick={handleGoogleAuth}
           >
            <FaGoogle size={20} color='#FFF' />
            Faça login com o Google
          </button>
          <button
           type="button" 
           className="github-button"
           onClick={handleGithubAuth}
           >
            <FaGithub size={20} color='#FFF' />
            Faça login com o Github
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
