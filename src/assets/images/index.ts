/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ImageSourcePropType } from 'react-native';

import AIRPLANE from './airplane.png';

type AssetsKeys =
  | 'AIRPLANE'



type GlobalAssets = {
  ASSETS: Record<AssetsKeys, ImageSourcePropType>;
};

const globalAssets: GlobalAssets = {
  ASSETS: {
    AIRPLANE,
  },
};

export default globalAssets;
