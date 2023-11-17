'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const react_1 = require('react');
const react_native_1 = require('react-native');
const react_native_linear_gradient_1 = tslib_1.__importDefault(
  require('react-native-linear-gradient'),
);
const fp_1 = require('lodash/fp');
function ButtonCore({
  children = null,
  gradientColors = ['#ff0000', '#ff0000'],
  accessibilityLabel,
  width,
  height = 40,
  disabled = false,
  hitSlop,
}) {
  const $hitSlop = (0, react_1.useMemo)(() => {
    if ((0, fp_1.isUndefined)(hitSlop)) {
      return undefined;
    }
    const slop = {
      top: hitSlop,
      bottom: hitSlop,
      left: hitSlop,
      right: hitSlop,
    };
    return slop;
  }, [hitSlop]);
  const handlePress = () => {};
  return (
    <react_native_1.Pressable
      {...{ disabled }}
      onPress={handlePress}
      hitSlop={$hitSlop}
      accessibilityRole="button"
    >
      <react_native_1.View
        accessible
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled }}
      >
        <react_native_1.View
          importantForAccessibility="no-hide-descendants"
          {...{ width, height }}
          style={{ borderRadius: 15 }}
        >
          <react_native_linear_gradient_1.default
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              ...react_native_1.StyleSheet.absoluteFillObject,
            }}
            start={{ x: 0.47, y: -0.2 }}
            end={{ x: 0.5, y: 0.8 }}
            colors={gradientColors}
          >
            {children}
          </react_native_linear_gradient_1.default>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.Pressable>
  );
}
exports.default = ButtonCore;
