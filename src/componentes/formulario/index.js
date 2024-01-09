import { useState } from 'react';
import styles from './Formulario.module.css'
import emailjs from '@emailjs/browser'

function Formulario() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [invalidName, setInvalidName] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");
  const [emptyEmail, setEmptyEmail] = useState("")
  const [invalidMessage, setInvalidMessage] = useState("");
  const [allRight, setAllRight] = useState("")

  function checkName() {
    if (name === '') {
      return setInvalidName("O campo Nome não pode estar vazio")
    } else if (name !== '') {
      setInvalidName("");
    } else {
      setInvalidName("");
    }
  }

  function checkEmail() {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (email === '') {
        setEmptyEmail("O campo Email não pode estar vazio");
    } else if (!regEx.test(email) && email !== "") {
        setEmptyEmail("");
        return setInvalidEmail("Email inválido");
    } else if (regEx.test(email)) {
        setInvalidEmail("");
    } else {
      setInvalidEmail("");
      setEmptyEmail("");
    }
  }

  function checkMessage() {
    if (message === '' || message.length <= 9) {
      return setInvalidMessage("A mensagem não pode estar vazia ou muito curta!")
    } else {
      setInvalidMessage("")
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    if(invalidName !== "" || invalidEmail !== "" || emptyEmail !== "" || invalidMessage !== "") {
      return;
    } else {
      setAllRight("Email de contato enviado!")
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send('service_16h6ws4', 'template_yvn6d0q', templateParams, '4hkQhH0k30wN6iwnz')
      .then((response) => {
        console.log('Email enviado', response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
        setInvalidEmail('')
        setAllRight('')
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
            onBlur={checkName}
          />
          <span  className={styles.invalid}>{invalidName}</span>
        </div>
        <div className={styles.formElements}>
          <label>Email</label>
          <input
            className={styles.inputForm}
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            onBlur={checkEmail}
          />
          <span className={styles.invalid}>{invalidEmail}</span>
          <span className={styles.invalid}>{emptyEmail}</span>
        </div>
        <div className={styles.formElements}>
          <label>Mensagem</label>
          <textarea
            className={styles.inputTextForm}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onBlur={checkMessage}
          />
          <span className={styles.invalid}>{invalidMessage}</span>
        </div>
        <div>
          <input className={styles.formButton} type="submit" value="Enviar" />
        </div>
          <span className={styles.valid}>{allRight}</span>
      </form>

    </div>
  );
}

export default Formulario;