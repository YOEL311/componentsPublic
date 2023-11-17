import { Text, View } from 'react-native';
import ButtonCore from './core.js';
function ButtonLess({ text, width }) {
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
