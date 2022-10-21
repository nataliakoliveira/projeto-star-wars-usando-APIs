import { React, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Form.css';

function Form() {
  const { data, setData, FilterText, handleChange, filterColuna,
    setFilterColuna, filterComparacao, setFilterComparacao,
    filterInputNum, setFilterInputNum, columnFilter2,
    setColumnFilter2 } = useContext(StarWarsContext);

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
    setFilterColuna(columnFilter2[0]);
    setColumnFilter2(columnFilter2.filter((opt) => opt !== filterColuna));
  };

  return (
    <form>
      <input
        type="text"
        className="inputName"
        data-testid="name-filter"
        onChange={ handleChange }
        value={ FilterText }
        placeholder="Digite o nome de um planeta"
      />
      <div className="form">
        <label htmlFor="coluna" className="titulo">
          Coluna
          <select
            data-testid="column-filter"
            className="column"
            value={ filterColuna }
            onChange={ ({ target }) => setFilterColuna(target.value) }
          >
            {/*            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option> */}
            {columnFilter2.map((elem, index) => (
              <option key={ index }>
                {elem}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Operador" className="titulo">
          Operador
          <select
            data-testid="comparison-filter"
            className="comparison"
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
          className="inputValue"
          value={ filterInputNum }
          onChange={ ({ target }) => setFilterInputNum(target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          className="btnFilter"
          onClick={ handleFilter }
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}

export default Form;
