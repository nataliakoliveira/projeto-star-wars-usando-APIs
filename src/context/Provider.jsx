import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const array = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterText, setFilter] = useState('');
  const [filterColuna, setFilterColuna] = useState('population');
  const [filterComparacao, setFilterComparacao] = useState('maior que');
  const [filterInputNum, setFilterInputNum] = useState(0);
  const [columnFilter2, setColumnFilter2] = useState(array);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const { results } = await response.json();
      const apiFilter = results.filter((element) => delete element.residents);
      setData(apiFilter);
    };
    fetchAPI();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const values = useMemo(() => ({
    data,
    setData,
    filterText,
    handleChange,
    filterColuna,
    setFilterColuna,
    filterComparacao,
    setFilterComparacao,
    filterInputNum,
    setFilterInputNum,
    columnFilter2,
    setColumnFilter2,
  }), [
    data, filterText, filterColuna, filterComparacao,
    filterInputNum, columnFilter2]);

  return (
    <StarWarsContext.Provider value={ values }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
