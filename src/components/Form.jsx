import { React, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const { data, setData, FilterText, handleChange, filterColuna,
    setFilterColuna, filterComparacao, setFilterComparacao,
    filterInputNum, setFilterInputNum } = useContext(StarWarsContext);

  const handleFilter = () => {
    if (filterComparacao === 'maior que') {
      const filtro = data.filter((elem) => Number(elem[filterColuna])
        > Number(filterInputNum));
      setData(filtro);
    }
    if (filterComparacao === 'menor que') {
      const filtro = data.filter((elem) => Number(elem[filterColuna])
        < Number(filterInputNum));
      setData(filtro);
    }
    if (filterComparacao === 'igual a') {
      const filtro = data.filter((elem) => elem[filterColuna] === filterInputNum);
      setData(filtro);
    }
  };

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        value={ FilterText }
        placeholder="Digite o nome de um planeta"
      />
      <label htmlFor="coluna">
        Coluna
        <select
          data-testid="column-filter"
          value={ filterColuna }
          onChange={ ({ target }) => setFilterColuna(target.value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="Operador">
        Operador
        <select
          data-testid="comparison-filter"
          value={ filterComparacao }
          onChange={ ({ target }) => setFilterComparacao(target.value) }
        >
          <option>menor que</option>
          <option>maior que</option>
          <option>igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        value={ filterInputNum }
        onChange={ ({ target }) => setFilterInputNum(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Form;
