"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _MaterialCommunityIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Dropdown = ({
  items,
  displayItems = 4,
  placeholder,
  styles,
  icon = 'chevron-down',
  outlineColor = '#000',
  borderColor = '#EBEAEC'
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = (0, _react.useState)(false);
  const iconRotate = (0, _reactNativeReanimated.useSharedValue)('0deg');
  const animatedIconStyles = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    transform: [{
      rotate: (0, _reactNativeReanimated.withSpring)(iconRotate.value)
    }]
  }));
  const dropdownListHeight = (0, _reactNativeReanimated.useSharedValue)(0);
  const maxItemHeight = styles && styles.dropdownItem && styles.dropdownItem.height && typeof styles.dropdownItem.height === 'number' ? styles.dropdownItem.height : 44;
  const maxListHeight = displayItems * maxItemHeight;
  const [selectedItem, setSelectedItem] = (0, _react.useState)(null);
  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
    iconRotate.value = iconRotate.value === '0deg' ? '180deg' : '0deg';
    dropdownListHeight.value = dropdownListHeight.value === 0 ? (0, _reactNativeReanimated.withTiming)(maxListHeight, {
      duration: 200
    }) : (0, _reactNativeReanimated.withTiming)(0);
  };
  const activeItemStyle = {
    ..._style.default.activeDropdownItem,
    ...styles?.activeItem
  };
  const activeItemTextStyle = {
    ..._style.default.activeDropdownItemText,
    ...styles?.activeItemText
  };
  const renderIcon = () => {
    if ( /*#__PURE__*/(0, _react.isValidElement)(icon)) {
      return icon;
    }
    if (typeof icon === 'string') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaterialCommunityIcons.default, {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [_style.default.dropdownInputContainer, styles && styles.inputContainer, getBorderColor(), isOpenDropdown && _style.default.focusedDropdownInputContainer],
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
        style: [_style.default.dropdownToggler, styles && styles.dropdownToggler],
        android_ripple: {
          foreground: true,
          color: 'rgba(0,0,0,0.3)'
        },
        onPress: toggleDropdown,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [_style.default.dropdownText, styles && styles.inputText, selectedItem && _style.default.activeDropdownText],
          children: selectedItem ? selectedItem.label : placeholder ?? 'Select an option'
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [_style.default.iconContainer, styles && styles.iconContainer],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
            style: animatedIconStyles,
            children: renderIcon()
          })
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      style: [_style.default.dropdownList, styles && styles.dropdownList, {
        height: dropdownListHeight
      }, getBorderColor(), isOpenDropdown && _style.default.openDropdownList],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.ScrollView, {
        showsVerticalScrollIndicator: true,
        children: items.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          android_ripple: {
            color: 'rgba(0,0,0,0.3)'
          },
          style: [_style.default.dropdownItem, styles && styles.dropdownItem, selectedItem?.value === item.value && activeItemStyle],
          onPress: () => {
            setSelectedItem(item);
            toggleDropdown();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [_style.default.dropdownItemText, styles && styles.dropdownItemText, selectedItem?.value === item.value && activeItemTextStyle],
            children: item.label
          })
        }, index))
      })
    })]
  });
};
var _default = exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map