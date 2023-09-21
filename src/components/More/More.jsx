import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div>
      <h2>Idiomas</h2>
      <p>{languages.language}</p>
      <p>{languages.wrlevel}</p>
      <p>{languages.splevel}</p>
      <h2>Habilidades</h2>
      <ul>
        {habilities.map((hability) => (
          <li key={hability}>{hability}</li>
        ))}
      </ul>
      <h2>Voluntariado</h2>
      {volunteer.map((item) => (
        <div key={JSON.stringify(item)}>
          <p>{item.where}</p>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default More;