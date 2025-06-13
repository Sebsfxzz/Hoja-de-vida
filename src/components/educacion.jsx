const Educacion = () => {
    const formacionAcademica = [
      {
        year: "2024",
        titulo: "Tecnologo en analisis y desarrollo de sofware ( actuialamente en curso) ",
        institucion: "SENA - Centro de Industria y Construccion"
      },
      {
        year: "2021",
        titulo: "Bachiller tecnico agropecualio",
        institucion: "Institucion Educativa Tecnica La Arada"
      }
    ];
  
    return (
      <section className="section">
        <h2>ESTUDIOS</h2>
        <div className="education-list">
          {formacionAcademica.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="year">{edu.year}</div>
              <div className="education-details">
                <h3>{edu.titulo}</h3>
                <p>{edu.institucion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Educacion;