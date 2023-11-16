/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ImageSourcePropType } from 'react-native';

import CHEVRON_BLUE from './ui-systemicon-chevron-blue.svg';
import CHEVRON_CLOSE from './ui-systemicon-chevron-close.svg';

type IconsKeys='CHEVRON_BLUE'|'CHEVRON_CLOSE'

type GlobalIcons = {
  UI: Record<IconsKeys, ImageSourcePropType>;
};

const ALL_ICONS: GlobalIcons = {
  UI:{
    CHEVRON_BLUE,
    CHEVRON_CLOSE,
  },
};

export default ALL_ICONS;
