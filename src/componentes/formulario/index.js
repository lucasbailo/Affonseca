import { useState } from 'react';
import styles from './Formulario.module.css'
import emailjs from '@emailjs/browser'

function Formulario() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === '') {
      alert("Por favor, preencha todos os campos.")
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send('service_16h6ws4', 'template_yvn6d0q', templateParams, '4hkQhH0k30wN6iwnz')
    .then((response)=> {
      console.log('Email enviado', response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  return (
    <div className={styles.containerFormulario}>

      <form className={styles.formulario} onSubmit={sendEmail}>
        <div className={styles.formElements}>
          <label>Nome</label>
          <input 
            className={styles.inputForm}
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles.formElements}>
          <label>Email</label>
          <input 
            className={styles.inputForm}
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.formElements}>
          <label>Mensagem</label>
          <textarea 
            className={styles.inputTextForm}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div>
          <input className={styles.formButton} type="submit" value="Enviar" />
        </div>
      </form>

    </div>
  );
}

export default Formulario;