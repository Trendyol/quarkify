import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '../components/button';

const stories = storiesOf('Button', module);

stories.add('Primary', () => (
    <Button
        variant='primary'
    >
        Primary
    </Button>
));

stories.add('Secondary', () => (
    <Button
        variant='secondary'
    >
        Secondary
    </Button>
));

stories.add('Disabled', () => (
    <Button
        disabled
    >
        Disabled
    </Button>
));
