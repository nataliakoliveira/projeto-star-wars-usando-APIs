import { React, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const { FilterText, handleChange } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        value={ FilterText }
      />
    </div>
  );
}

export default Form;
