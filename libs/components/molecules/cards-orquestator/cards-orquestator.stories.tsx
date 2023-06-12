import { StoryObj, Meta } from '@storybook/react';
import { CardsOrquestator } from './cards-orquestator';

export default {
  title: 'Components/Molecules/CardsOrquestator',
  component: CardsOrquestator,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof CardsOrquestator>;

type Template = StoryObj<typeof CardsOrquestator>;

export const Default: Template = {
  args: {
    data: [
      {
        fact: 'The average human body contains enough bones to make an entire human skeleton.',
        length: 75,
      },
      {
        fact: 'New cats are indomable',
        length: 22,
      },
    ],
  },
};
