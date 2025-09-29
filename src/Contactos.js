import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Ubicacion from './Ubicacion';

function Contactos() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const nombre = form.current.user_name.value.trim();
    const correo = form.current.user_email.value.trim();
    const mensaje = form.current.message.value.trim();

    if (nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Ingresa un correo válido.");
      return;
    }

    if (mensaje.length < 5) {
      alert("El mensaje debe tener al menos 5 caracteres.");
      return;
    }

    emailjs
      .sendForm(
        'service_db5ub8r',
        'template_8qc8hco',
        form.current,
        { publicKey: '-JbEf7ZLndSqCSPoG' }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert("El correo se ha enviado con éxito!");
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Algo salió mal y no se pudo enviar el correo.");
        }
      );
  };

  return (
    <div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="user_name" required minLength={3} />

      <label>Email</label>
      <input type="email" name="user_email" required />

      <label>Mensaje</label>
      <textarea name="message" required minLength={5} />

      <input type="submit" value="Enviar" />
    </form>
    <Ubicacion/>
    </div>

  );
}

export default Contactos;
