import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


const mockFetch = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(testData)
    }));
}

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
  it('testando o filtro', () => {
    render(<App />)
    const inputText = screen.getByTestId('name-filter');
    const inputValue = screen.getByTestId('value-filter');
    const btn = screen.getByRole('button', {
      name: /filtrar/i
    });
    expect(inputText).toBeInTheDocument();
    expect(inputValue).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    userEvent.type(inputText, /alderaan/i)
    userEvent.type(inputValue, '2')
    userEvent.click(btn);

  })
})
 it('Verifica valores iniciais de cada campo', async () => {
    render(<App />);
    const coluna = await screen.findByTestId('column-filter');
    expect(coluna).toHaveValue('population');
    expect(coluna.firstChild).toHaveTextContent('population');

  });