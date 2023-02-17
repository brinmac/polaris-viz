import type {Meta} from '@storybook/react';

import {TrendIndicator} from '../';
import {CONTROLS_ARGS, THEME_CONTROL_ARGS} from '../../../storybook/constants';
import {PageWithSizingInfo} from '../../Docs/stories';

export const META: Meta = {
  title: 'polaris-viz/Subcomponents/TrendIndicator',
  component: TrendIndicator,
  parameters: {
    docs: {
      page: PageWithSizingInfo,
      description: {
        component: 'Used to indicate a trend based on previous data.',
      },
    },
    controls: CONTROLS_ARGS,
  },
  decorators: [(Story) => <div style={{height: '500px'}}>{Story()}</div>],
  argTypes: {
    accessibilityLabel: {
      description: 'Visually hidden text for screen readers.',
    },
    direction: {
      description: 'Set the direction of the trend arrow.',
      options: ['upward', 'downward'],
    },
    size: {
      description: 'Set the visual size of the component.',
      options: ['default', 'small'],
    },
    theme: THEME_CONTROL_ARGS,
    trend: {
      description: 'Set the visual styling for the current trend.',
      options: ['positive', 'negative', 'neutral'],
    },
  },
};
