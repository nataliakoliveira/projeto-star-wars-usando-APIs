import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterText, setFilter] = useState('');
  const [filterColuna, setFilterColuna] = useState('population');
  const [filterComparacao, setFilterComparacao] = useState('maior que');
  const [filterInputNum, setFilterInputNum] = useState(0);

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
  }), [data, filterText, filterColuna, filterComparacao, filterInputNum]);

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
