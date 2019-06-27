import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '../components/button';

const stories = storiesOf('Button', module);

stories.add('Variants', () => (
  <div>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </div>
));

stories.add('Sizes', () => (
  <div>
    <Button variant="primary" size="small">
      Small
    </Button>
    <Button variant="primary">Default</Button>
    <Button variant="primary" size="large">
      Large
    </Button>
  </div>
));

stories.add('Disabled', () => <Button disabled>Disabled</Button>);
stories.add('Fluid', () => (
  <Button variant="primary" fluid>
    Fluid
  </Button>
));
