import type { ReactNode } from 'react';
interface CoreProps {
    children?: ReactNode | ReactNode[];
    accessibilityLabel?: string;
    gradientColors?: string[];
    width?: number;
    height?: number;
    disabled?: boolean;
    hitSlop?: number;
    automationId?: string;
}
declare function ButtonCore({ children, gradientColors, accessibilityLabel, width, height, disabled, hitSlop, }: CoreProps): JSX.Element;
export default ButtonCore;
