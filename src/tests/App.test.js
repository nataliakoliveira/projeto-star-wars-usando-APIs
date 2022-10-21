import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('testando aplicação', () => {
  it('verificado se os elementos estão renderizados', () => {
    render(<App />)
    const title = screen.getByRole('heading', {
      name: /star wars/i
    });
    const inputText = screen.getByTestId('name-filter');
    const coluna = screen.getByTestId('column-filter');
    const comparacao = screen.getByTestId('comparison-filter');
    const inputValue = screen.getByTestId('value-filter');
    const btn = screen.getByRole('button', {
      name: /filtrar/i
    })
    expect(title).toBeInTheDocument();
    expect(inputText).toBeInTheDocument();
    expect(coluna).toBeInTheDocument();
    expect(comparacao).toBeInTheDocument();
    expect(inputValue).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  })
  it('testando o filtro', async() => {
    render(<App />)
    const inputText = screen.getByTestId('name-filter');
    const coluna = screen.getByTestId('column-filter');
    const comparacao = screen.getByTestId('comparison-filter');
    const inputValue = screen.getByTestId('value-filter');
    const btn = screen.getByRole('button', {
      name: /filtrar/i
    });
    expect(inputText).toBeInTheDocument();
    expect(coluna).toBeInTheDocument();
    expect(comparacao).toBeInTheDocument();
    expect(inputValue).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    userEvent.type(inputText, /alderaan/i)
    userEvent.type(inputValue, '2')
    userEvent.selectOptions(coluna, 'diameter');
    userEvent.selectOptions(comparacao, 'maior que');
    userEvent.click(btn);
    userEvent.type(inputText, /coruscant/i)
    userEvent.type(inputValue, '300')
    userEvent.selectOptions(coluna, 'rotation_period');
    userEvent.selectOptions(comparacao, 'menor que');
    userEvent.click(btn);
    userEvent.type(inputText, /coruscant/i)
    userEvent.type(inputValue, '8')
    userEvent.selectOptions(coluna, 'surface_water');
    userEvent.selectOptions(comparacao, 'igual a');
    userEvent.click(btn);
  })
})
 it('Verifica valores iniciais de cada campo', async () => {
    render(<App />);
    const coluna = await screen.findByTestId('column-filter');
  
    expect(coluna).toHaveValue('population');
    expect(coluna.firstChild).toHaveTextContent('population');
  });
  it('verificando elementos da tabela', () => {
    render(<App />);
    const name = screen.getByRole('columnheader', {
      name: /name/i
    });
    const rotation = screen.getByRole('columnheader', {
      name: /rotation_period/i
    });
    const orbital = screen.getByRole('columnheader', {
      name: /orbital_period/i
    });
    const diameter = screen.getByRole('columnheader', {
      name: /diameter/i
    });
    const climate = screen.getByRole('columnheader', {
      name: /climate/i
    });
    const gravity = screen.getByRole('columnheader', {
      name: /gravity/i
    });
    const terrain = screen.getByRole('columnheader', {
      name: /terrain/i
    });
    const surface = screen.getByRole('columnheader', {
      name: /surface_water/i
    });
    const population = screen.getByRole('columnheader', {
      name: /population/i
    });
    const films = screen.getByRole('columnheader', {
      name: /films/i
    });
    const created = screen.getByRole('columnheader', {
      name: /created/i
    });
    const edited = screen.getByRole('columnheader', {
      name: /edited/i
    });
    const url = screen.getByRole('columnheader', {
      name: /url/i
    });
    expect(name).toBeInTheDocument();
    expect(rotation).toBeInTheDocument();
    expect(orbital).toBeInTheDocument();
    expect(diameter).toBeInTheDocument();
    expect(climate).toBeInTheDocument();
    expect(gravity).toBeInTheDocument();
    expect(terrain).toBeInTheDocument();
    expect(surface).toBeInTheDocument();
    expect(population).toBeInTheDocument();
    expect(films).toBeInTheDocument();
    expect(created).toBeInTheDocument();
    expect(edited).toBeInTheDocument();
    expect(url).toBeInTheDocument();
  })