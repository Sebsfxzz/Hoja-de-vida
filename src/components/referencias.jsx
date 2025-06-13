const Referencias = () => {
    const references = [
      {
        name: "jDavid Santiago Rodriguez",
        position: "Estudiante del sena (CIC)",
        phone: "3123921636",
        email: "rodriguezsierradavidsantiago@gmail.com"
      },
      {
        name: "Wilver Andres Manjaarrez Vera",
        position: "Estudiante del sena (CIC)",
        email: "wilvermanjarrezv@gmail.com",
        phone: "3333453015"
      }
    ];
  
    return (
      <section className="section">
        <h2>REFERENCIAS PROFESIONALES</h2>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <h3>{ref.name}</h3>
              <p>{ref.position}</p>
              {ref.description && <p>{ref.description}</p>}
              <p>Teléfono: {ref.phone}</p>
              {ref.email && <p>Email: {ref.email}</p>}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Referencias;