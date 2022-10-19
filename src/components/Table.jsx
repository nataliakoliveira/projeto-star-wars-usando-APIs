import React, { useContext } from 'react';
import './Table.css';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  console.log(data);
  return (
    <div className="headerLogo">
      <table className="darkTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation_period</th>
            <th>Orbital_period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((planets) => (
              <tr key={ planets.name }>
                <td>{planets.name}</td>
                <td>{planets.rotation_period}</td>
                <td>{planets.orbital_period}</td>
                <td>{planets.diameter}</td>
                <td>{planets.climate}</td>
                <td>{planets.gravity}</td>
                <td>{planets.terrain}</td>
                <td>{planets.surface_water}</td>
                <td>{planets.population}</td>
                <td>{planets.films}</td>
                <td>{planets.created}</td>
                <td>{planets.edited}</td>
                <td>{planets.url}</td>
              </tr>
            ))
          }
          <td>alguma coisa</td>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
