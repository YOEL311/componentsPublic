import { IMAGES } from '../assets';
import type ALL_ICONS from '../assets/icons';

const { ASSETS } = IMAGES;

export type Assets = keyof typeof ASSETS;
export type Icon = keyof typeof ALL_ICONS.UI;
export type Icons = Icon | null;
