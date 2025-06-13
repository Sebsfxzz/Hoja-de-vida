// eslint-disable-next-line react-refresh/only-export-components
import foto from '../assets/foto.jpg';


const encabezado = () => {
  return (
    <header className="header">
      <img
        src={foto}
        alt="Foto del aspirante"
        className="foto-perfil"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '20px',
        }}
      />
      <h1>Juan Sebastian Fierro Pradilla</h1>
      <h2>Ingeniera de Sistemas</h2>
      <div className="contact-info">
        <p>Ibagué, Colombia</p>
        <p>Teléfono: 3134490923</p>
        <p>Email: sebf.0527@gmail.com</p>
      </div>
    </header>
  );
};

export default encabezado;
