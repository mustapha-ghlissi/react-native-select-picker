import {View, Text, Pressable} from 'react-native';
import React, {useState, isValidElement} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {DropdownItem, DropdownProps} from './Dropdown.types';
import baseStyles from './style';

const Dropdown: React.FC<DropdownProps> = ({
  items,
  displayItems = 4,
  placeholder,
  styles,
  icon = 'chevron-down',
  outlineColor = '#000',
  borderColor = '#EBEAEC',
}: DropdownProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const iconRotate = useSharedValue<string>('0deg');
  const animatedIconStyles = useAnimatedStyle(() => ({
    transform: [{rotate: withSpring(iconRotate.value)}],
  }));
  const dropdownListHeight = useSharedValue<any>(0);
  const maxItemHeight: number =
    styles &&
    styles.dropdownItem &&
    styles.dropdownItem.height &&
    typeof styles.dropdownItem.height === 'number'
      ? styles.dropdownItem.height
      : 44;
  const maxListHeight = displayItems * maxItemHeight;
  const [selectedItem, setSelectedItem] = useState<null | DropdownItem>(null);
  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
    iconRotate.value = iconRotate.value === '0deg' ? '180deg' : '0deg';

    dropdownListHeight.value =
      dropdownListHeight.value === 0
        ? withTiming(maxListHeight, {duration: 200})
        : withTiming(0);
  };

  const activeItemStyle = {
    ...baseStyles.activeDropdownItem,
    ...styles?.activeItem,
  };

  const activeItemTextStyle = {
    ...baseStyles.activeDropdownItemText,
    ...styles?.activeItemText,
  };

  const renderIcon = () => {
    if (isValidElement(icon)) {
      return icon;
    }

    if (typeof icon === 'string') {
      return <Icon name={icon} size={32} color="#000" />;
    }

    return null;
  };

  const getBorderColor = () => ({
    borderColor: isOpenDropdown ? outlineColor : borderColor,
  });

  return (
    <View>
      <View
        style={[
          baseStyles.dropdownInputContainer,
          styles && styles.inputContainer,
          getBorderColor(),
          isOpenDropdown && baseStyles.focusedDropdownInputContainer,
        ]}>
        <Pressable
          style={[baseStyles.dropdownToggler, styles && styles.dropdownToggler]}
          android_ripple={{
            foreground: true,
            color: 'rgba(0,0,0,0.3)',
          }}
          onPress={toggleDropdown}>
          <Text
            style={[
              baseStyles.dropdownText,
              styles && styles.inputText,
              selectedItem && baseStyles.activeDropdownText,
            ]}>
            {selectedItem
              ? selectedItem.label
              : placeholder ?? 'Select an option'}
          </Text>

          <View
            style={[baseStyles.iconContainer, styles && styles.iconContainer]}>
            <Animated.View style={animatedIconStyles}>
              {renderIcon()}
            </Animated.View>
          </View>
        </Pressable>
      </View>

      <Animated.View
        style={[
          baseStyles.dropdownList,
          styles && styles.dropdownList,
          {
            height: dropdownListHeight,
          },
          getBorderColor(),
          isOpenDropdown && baseStyles.openDropdownList,
        ]}>
        <ScrollView showsVerticalScrollIndicator>
          {items.map((item: DropdownItem, index: number) => (
            <Pressable
              key={index}
              android_ripple={{
                color: 'rgba(0,0,0,0.3)',
              }}
              style={[
                baseStyles.dropdownItem,
                styles && styles.dropdownItem,
                selectedItem?.value === item.value && activeItemStyle,
              ]}
              onPress={() => {
                setSelectedItem(item);
                toggleDropdown();
              }}>
              <Text
                style={[
                  baseStyles.dropdownItemText,
                  styles && styles.dropdownItemText,
                  selectedItem?.value === item.value && activeItemTextStyle,
                ]}>
                {item.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default Dropdown;
