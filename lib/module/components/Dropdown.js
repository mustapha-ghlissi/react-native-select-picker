import { View, Text, Pressable } from 'react-native';
import React, { useState, isValidElement } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import baseStyles from './style';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Dropdown = ({
  items,
  displayItems = 4,
  placeholder,
  styles,
  icon = 'chevron-down',
  outlineColor = '#000',
  borderColor = '#EBEAEC'
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const iconRotate = useSharedValue('0deg');
  const animatedIconStyles = useAnimatedStyle(() => ({
    transform: [{
      rotate: withSpring(iconRotate.value)
    }]
  }));
  const dropdownListHeight = useSharedValue(0);
  const maxItemHeight = styles && styles.dropdownItem && styles.dropdownItem.height && typeof styles.dropdownItem.height === 'number' ? styles.dropdownItem.height : 44;
  const maxListHeight = displayItems * maxItemHeight;
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
    iconRotate.value = iconRotate.value === '0deg' ? '180deg' : '0deg';
    dropdownListHeight.value = dropdownListHeight.value === 0 ? withTiming(maxListHeight, {
      duration: 200
    }) : withTiming(0);
  };
  const activeItemStyle = {
    ...baseStyles.activeDropdownItem,
    ...styles?.activeItem
  };
  const activeItemTextStyle = {
    ...baseStyles.activeDropdownItemText,
    ...styles?.activeItemText
  };
  const renderIcon = () => {
    if ( /*#__PURE__*/isValidElement(icon)) {
      return icon;
    }
    if (typeof icon === 'string') {
      return /*#__PURE__*/_jsx(Icon, {
        name: icon,
        size: 32,
        color: "#000"
      });
    }
    return null;
  };
  const getBorderColor = () => ({
    borderColor: isOpenDropdown ? outlineColor : borderColor
  });
  return /*#__PURE__*/_jsxs(View, {
    children: [/*#__PURE__*/_jsx(View, {
      style: [baseStyles.dropdownInputContainer, styles && styles.inputContainer, getBorderColor(), isOpenDropdown && baseStyles.focusedDropdownInputContainer],
      children: /*#__PURE__*/_jsxs(Pressable, {
        style: [baseStyles.dropdownToggler, styles && styles.dropdownToggler],
        android_ripple: {
          foreground: true,
          color: 'rgba(0,0,0,0.3)'
        },
        onPress: toggleDropdown,
        children: [/*#__PURE__*/_jsx(Text, {
          style: [baseStyles.dropdownText, styles && styles.inputText, selectedItem && baseStyles.activeDropdownText],
          children: selectedItem ? selectedItem.label : placeholder ?? 'Select an option'
        }), /*#__PURE__*/_jsx(View, {
          style: [baseStyles.iconContainer, styles && styles.iconContainer],
          children: /*#__PURE__*/_jsx(Animated.View, {
            style: animatedIconStyles,
            children: renderIcon()
          })
        })]
      })
    }), /*#__PURE__*/_jsx(Animated.View, {
      style: [baseStyles.dropdownList, styles && styles.dropdownList, {
        height: dropdownListHeight
      }, getBorderColor(), isOpenDropdown && baseStyles.openDropdownList],
      children: /*#__PURE__*/_jsx(ScrollView, {
        showsVerticalScrollIndicator: true,
        children: items.map((item, index) => /*#__PURE__*/_jsx(Pressable, {
          android_ripple: {
            color: 'rgba(0,0,0,0.3)'
          },
          style: [baseStyles.dropdownItem, styles && styles.dropdownItem, selectedItem?.value === item.value && activeItemStyle],
          onPress: () => {
            setSelectedItem(item);
            toggleDropdown();
          },
          children: /*#__PURE__*/_jsx(Text, {
            style: [baseStyles.dropdownItemText, styles && styles.dropdownItemText, selectedItem?.value === item.value && activeItemTextStyle],
            children: item.label
          })
        }, index))
      })
    })]
  });
};
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map