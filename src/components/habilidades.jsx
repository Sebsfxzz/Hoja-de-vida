const Habilidades = () => {
    const habilidad = [
      "razonamiento crítico",
      "Trabajo en equipo",
      "Gran capacidad de adaptabilidad",
      "Habilidades de análisis",
      "Toma de decisiones"
    ];
  
    return (
      <section className="section">
        <h2>HABILIDADES</h2>
        <ul className="skills-list">
          {habilidad.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Habilidades;