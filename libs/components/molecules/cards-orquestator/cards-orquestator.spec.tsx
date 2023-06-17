import { render, RenderResult } from '@testing-library/react';
import { CardsOrquestator } from './cards-orquestator';
import type { TFactResult } from '@types';

describe('CardsOrquestator', () => {
  let renderResult: RenderResult;

  const facts: TFactResult[] = [
    {
      fact: 'fact',
      length: 4,
    },
  ];

  const renderComponent = () => {
    renderResult = render(<CardsOrquestator data={facts} />);

    return renderResult;
  };

  it('should render the component', () => {
    renderComponent();
    const { getByText } = renderResult;

    expect(getByText(/fact/i)).toBeInTheDocument();
    expect(getByText(/length/i)).toBeInTheDocument();
  });
});
