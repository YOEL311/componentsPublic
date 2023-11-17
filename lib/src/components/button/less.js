'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const react_native_1 = require('react-native');
const core_1 = tslib_1.__importDefault(require('./core'));
function ButtonLess({ text, width }) {
  return (
    <core_1.default {...{ width }} gradientColors={['red', 'green']}>
      <>
        <react_native_1.View style={{ marginRight: 10 }} />
        <react_native_1.Text>{text}</react_native_1.Text>
      </>
    </core_1.default>
  );
}
exports.default = ButtonLess;
