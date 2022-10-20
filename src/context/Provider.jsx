import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterText, setFilter] = useState('');

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
    filterText,
    handleChange,
  }), [data, filterText]);

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
