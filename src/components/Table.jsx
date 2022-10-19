import React from 'react';
import './Table.css';

function Table() {
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
          </tr>
        </thead>
        <tbody>
          <td>alguma coisa</td>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
