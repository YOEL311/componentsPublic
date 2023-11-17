import { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { isUndefined } from 'lodash/fp.js';
function ButtonCore({
  children = null,
  gradientColors = ['#ff0000', '#ff0000'],
  accessibilityLabel,
  width,
  height = 40,
  disabled = false,
  hitSlop,
}) {
  const $hitSlop = useMemo(() => {
    if (isUndefined(hitSlop)) {
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
    <Pressable
      {...{ disabled }}
      onPress={handlePress}
      hitSlop={$hitSlop}
      accessibilityRole="button"
    >
      <View
        accessible
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled }}
      >
        <View
          importantForAccessibility="no-hide-descendants"
          {...{ width, height }}
          style={{ borderRadius: 15 }}
        >
          <LinearGradient
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              ...StyleSheet.absoluteFillObject,
            }}
            start={{ x: 0.47, y: -0.2 }}
            end={{ x: 0.5, y: 0.8 }}
            colors={gradientColors}
          >
            {children}
          </LinearGradient>
        </View>
      </View>
    </Pressable>
  );
}
export default ButtonCore;
