const Experiencia = () => {
    const experienciaLaboral = [
      {
        id: 1,
        empresa: "Artesanias Totumín",
        cargo: "Auxiliar en mano de obra",
        period: "4 de marzo de 2020 - 28 de octubre de 2022",
        funciones: [
          "Ensamblaje de producto.",
          "Organización de materia prima.",
          "Manejo de maquinaria."
        ],
        supervisor: "Jaiber Arley Chirimuscay",
        contacto: "3138521886"
      },
      { 
        id: 2,
        empresa: "Minimarket Farey",
        cargo: "Cajero y vendedor",
        period: "febrero de 2022 - enero de 2023",
        funciones: [
          "Atencion al cliente.",
          "Servicio de asesoramiento de productos de ingesta a personas naturales."
        ],
        supervisor: "Farey González",
        contacto: "3115598389"
      },
      {
        id: 3,
        empresa: "MORATA",
        cargo: "Mesero",
        period: "4 de octubre de 2023 - 2 de novienbre de 2023",
        funciones: [
          "Atencion al cliente",
          "Mesero",
          "Aseo y limpieza en areas generales",
        ],
        supervisor: "Alejandra supervisora",
        contacto: "3223342570"
      },
      {
        id: 4,
        empresa: "IBANASCA",
        cargo: "Mesero",
        period: "3 de nobiembre de 2023 - 27 de enero de 2024",
        funciones: [
          "Atencion al cliente",
          "Mesero",
          "Aseo y limpieza en areas generales"
        ],
        supervisor: "Shirley supervisora",
        contacto: "3155187868"
      }
    ];
  
    return (
      <section className="section">
        <h2>EXPERIENCIA LABORAL</h2>
        <div className="experience-list">
          {experienciaLaboral.map(exp => (
            <div key={exp.id} className="experience-item">
              <h3>{exp.company}</h3>
              <p className="position">{exp.cargo} | {exp.period}</p>
              <h4>Funciones:</h4>
              <ul>
                {exp.funciones.map((func, index) => (
                  <li key={index}>{func}</li>
                ))}
              </ul>
              <p className="supervisor"><strong>Jefe inmediato:</strong> {exp.supervisor}</p>
              <p className="contact"><strong>Contacto:</strong> {exp.contacto}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experiencia;