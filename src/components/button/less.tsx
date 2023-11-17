import { Text, View } from 'react-native';

import ButtonCore from './core';

interface Props {
  accessibilityLabel?: string;
  text?: string;
  width?: number;
  automationId?: string;
}

/**
 * This a button component with the up chevron,
 * it can get the text using props but the most common usage
 * will be with the default property.
 *
 * This components uses the ButtonCore (@see ButtonCoreComponent) component.
 */
function ButtonLess({ text, width }: Props): JSX.Element {
  return (
    <ButtonCore {...{ width }} gradientColors={['red', 'green']}>
      <>
        <View style={{ marginRight: 10 }} />
        <Text>{text}</Text>
      </>
    </ButtonCore>
  );
}

export default ButtonLess;
