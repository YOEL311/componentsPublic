/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ImageSourcePropType } from 'react-native';

import CHECKBOX_CHECK_MARK_2 from './check_white_24dp.svg';
import INDICATOR from './indicator.svg';
import MORE_OPTIONS from './ui-system-more.svg';
import CHEVRON_BLUE from './ui-systemicon-chevron-blue.svg';
import CHEVRON_CLOSE from './ui-systemicon-chevron-close.svg';
import X_BLUE from './ui-systemicon-close-blue.svg';

type IconsKeys='CHEVRON_BLUE'|'CHEVRON_CLOSE'|'X_BLUE'|'CHECKBOX_CHECK_MARK_2'|'MORE_OPTIONS'|'INDICATOR'

type GlobalIcons = {
  UI: Record<IconsKeys, ImageSourcePropType>;
};

const ALL_ICONS: GlobalIcons = {
  UI:{
    CHEVRON_BLUE,
    CHEVRON_CLOSE,
    X_BLUE,
    CHECKBOX_CHECK_MARK_2,
    MORE_OPTIONS,
    INDICATOR,
  },
};

export default ALL_ICONS;
