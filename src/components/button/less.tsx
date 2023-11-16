import { Text, View } from 'react-native';

import { getAutomationId } from '../../utils/ui/getAutomationId';
import { getIconByName } from '../../utils/ui/getIconByName';

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
function ButtonLess({ text, width, automationId }: Props): JSX.Element {
  return (
    <ButtonCore
      automationId={getAutomationId(automationId, 'button-core')}
      {...{ width }}
      gradientColors={['red', 'green']}>
      <>
        <View
          style={{ marginRight: 10 }}
          testID={getAutomationId(automationId, 'icon')}>
          {getIconByName('CHEVRON_CLOSE', 10)}
        </View>
        <Text testID={getAutomationId(automationId, 'text')}>{text}</Text>
      </>
    </ButtonCore>
  );
}

export default ButtonLess;
