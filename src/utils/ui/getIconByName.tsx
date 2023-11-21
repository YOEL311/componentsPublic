import { createElement } from 'react';
import { Image } from 'react-native';
import { isNumber, isUndefined } from 'lodash/fp';

import type { Assets, Icons } from '../../@types/common';
import { IMAGES } from '../../assets';
import ALL_ICONS from '../../assets/icons';

const { ASSETS } = IMAGES;

/**
 * This function resolves the component based on the requested key
 * If icon name not found in Icons it will search in UI images.
 */
export function getIconByName(
  name: Icons | Assets = null,
  iconSize: number | { width?: number; height?: number } = 32,
): JSX.Element | null {
  const icons = ALL_ICONS.UI;

  if (name === null) {
    return <></>;
  }

  if (icons[name]) {
    if (!isNumber(iconSize)) {
      return createElement(icons[name], iconSize);
    }
    return createElement(icons[name], { width: iconSize, height: iconSize });
  }

  const assetsSource = isUndefined(ASSETS[name])
    ? undefined
    : (name as keyof typeof ASSETS);
  if (!isUndefined(assetsSource)) {
    if (isNumber(iconSize)) {
      return <Image source={ASSETS[assetsSource]} />;
    }
    return null;
  }

  return null;
}
