import {ScrollView, View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState, isValidElement, useEffect, memo} from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {DropdownItem, DropdownProps} from './Dropdown.types';
import baseStyles from './style';

const Dropdown: React.FC<DropdownProps> = memo(
  ({
    items,
    displayItems = 4,
    placeholder,
    styles,
    icon = 'chevron-down',
    outlineColor = '#145DA0',
    borderColor = '#E2E2E2',
    borderWidth = 1,
    multiple = false,
    checkIcon = 'check',
    inline = false,
    onSelectChange,
    animationDuration = 200,
  }: DropdownProps) => {
    const [selectedItems, setSelectedItems] = useState<DropdownItem[]>([]);
    const [selectedItem, setSelectedItem] = useState<null | DropdownItem>(null);
    const iconRotate = useSharedValue<string>('0deg');
    const animatedIconStyles = useAnimatedStyle(() => ({
      transform: [{rotate: withSpring(iconRotate.value)}],
    }));
    const maxItemHeight: number =
      styles &&
      styles.dropdownItem &&
      styles.dropdownItem.height &&
      typeof styles.dropdownItem.height === 'number'
        ? styles.dropdownItem.height
        : baseStyles.dropdownItem.height;
    const maxListHeight = displayItems * maxItemHeight;
    const [isOpenDropdown, setIsOpendropdown] = useState<boolean>(false);
    const dropdownListHeight = useSharedValue(maxListHeight);
    const deviredDropdownListHeight = useDerivedValue(() =>
      withTiming(dropdownListHeight.value * Number(isOpenDropdown), {
        duration: animationDuration,
      }),
    );
    const animatedDropdownListStyle = useAnimatedStyle(() => ({
      height: deviredDropdownListHeight.value,
    }));

    const activeItemStyle = {
      ...baseStyles.activeDropdownItem,
      ...styles?.activeItem,
    };

    const activeItemTextStyle = {
      ...baseStyles.activeDropdownItemText,
      ...styles?.activeItemText,
    };

    const togglerHeight =
      styles && styles.dropdownToggler && styles.dropdownToggler.height
        ? styles.dropdownToggler.height
        : baseStyles.dropdownToggler.height;

    const getBorderColor = () => ({
      borderColor: isOpenDropdown ? outlineColor : borderColor,
    });

    const innerStyles = StyleSheet.create({
      dropdownList: {
        display: isOpenDropdown ? 'flex' : 'none',
        top: inline ? 0 : Number(togglerHeight) + borderWidth * 2,
        position: inline ? 'relative' : 'absolute',
        ...getBorderColor(),
      },
    });

    const toggleDropdown = () => {
      setIsOpendropdown(!isOpenDropdown);
      iconRotate.value = iconRotate.value === '0deg' ? '180deg' : '0deg';
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

    const renderSelectedItems = (): string => {
      if (multiple && selectedItems.length) {
        return selectedItems
          .map(_selectedItem => _selectedItem.label)
          .join(', ');
      }

      if (selectedItem) {
        return selectedItem?.label;
      }

      return placeholder ?? 'Select an option';
    };

    const isSelectedItem = (item: DropdownItem) => {
      if (selectedItems.length) {
        return (
          selectedItems.find(
            _selectedItem => _selectedItem.value === item.value,
          ) !== undefined
        );
      }

      return selectedItem?.value === item.value;
    };

    useEffect(() => {
      const changedSelected = selectedItem || selectedItems;
      onSelectChange(changedSelected);
    }, [onSelectChange, selectedItem, selectedItems]);

    return (
      <View>
        <View
          style={[
            baseStyles.dropdownInputContainer,
            styles && styles.inputContainer,
            getBorderColor(),
            {borderWidth},
            isOpenDropdown && baseStyles.focusedDropdownInputContainer,
          ]}>
          <Pressable
            style={[
              baseStyles.dropdownToggler,
              styles && styles.dropdownToggler,
            ]}
            android_ripple={{
              foreground: true,
              color: 'rgba(0,0,0,0.3)',
            }}
            onPress={toggleDropdown}>
            <Text
              style={[
                baseStyles.dropdownText,
                styles && styles.inputText,
                (selectedItems || selectedItem) &&
                  baseStyles.activeDropdownText,
              ]}
              numberOfLines={1}>
              {renderSelectedItems()}
            </Text>

            <Animated.View
              style={[
                baseStyles.iconContainer,
                animatedIconStyles,
                styles && styles.iconContainer,
              ]}>
              {renderIcon()}
            </Animated.View>
          </Pressable>
        </View>

        <Animated.View
          style={[
            baseStyles.dropdownList,
            styles && styles.dropdownList,
            {borderWidth},
            animatedDropdownListStyle,
            innerStyles.dropdownList,
          ]}>
          <ScrollView showsVerticalScrollIndicator>
            {items.map((item: DropdownItem, itemIndex: number) => (
              <Pressable
                key={`dropdownItemIndex_${itemIndex}`}
                android_ripple={{
                  color: 'rgba(0,0,0,0.3)',
                }}
                style={[
                  baseStyles.dropdownItem,
                  styles && styles.dropdownItem,
                  isSelectedItem(item) && activeItemStyle,
                ]}
                onPress={() => {
                  if (multiple) {
                    const existItemIndex = selectedItems.findIndex(
                      selectedItem => selectedItem.value === item.value,
                    );

                    if (existItemIndex > -1) {
                      setSelectedItems([
                        ...selectedItems.filter(
                          (_, index) => index !== existItemIndex,
                        ),
                      ]);
                    } else {
                      setSelectedItems([...selectedItems, item]);
                    }
                  } else {
                    setSelectedItem(item);
                    toggleDropdown();
                  }
                }}>
                <Text
                  style={[
                    baseStyles.dropdownItemText,
                    styles && styles.dropdownItemText,
                    isSelectedItem(item) && activeItemTextStyle,
                  ]}>
                  {item.label}
                </Text>
                {multiple &&
                  isSelectedItem(item) &&
                  (typeof checkIcon === 'string' ? (
                    <Icon name={checkIcon} size={26} color={'#FFF'} />
                  ) : (
                    checkIcon
                  ))}
              </Pressable>
            ))}
          </ScrollView>
        </Animated.View>
      </View>
    );
  },
);

export default Dropdown;
