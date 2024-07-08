declare module '@mustapha-ghlissi/react-native-select-picker' {
  import React, {ReactNode} from 'react';
  import {ViewStyle, TextStyle} from 'react-native';

  export type DropdownItem = {
    label: string;
    value: any;
  };

  export type DropdownStyle = {
    inputContainer?: ViewStyle;
    inputText?: TextStyle;
    dropdownToggler?: ViewStyle;
    iconContainer?: ViewStyle;
    dropdownList?: ViewStyle;
    dropdownItem?: ViewStyle;
    dropdownItemText?: ViewStyle;
    activeItem?: ViewStyle;
    activeItemText?: TextStyle;
  };

  export type DropdownProps = {
    items: Array<DropdownItem>;
    displayItems?: number;
    placeholder?: string;
    styles?: DropdownStyle;
    icon?: string | ReactNode;
    outlineColor?: string;
    borderColor?: string;
  };
  
  const Dropdown: React.FC<DropdownProps>;
  export default Dropdown;
}
