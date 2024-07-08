import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  dropdownInputContainer: {
    borderRadius: 6,
    borderWidth: 1,
    overflow: 'hidden'
  },
  focusedDropdownInputContainer: {
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0
  },
  dropdownToggler: {
    justifyContent: 'center',
    height: 46,
    paddingHorizontal: 10
  },
  dropdownText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#C7C7C7'
  },
  activeDropdownText: {
    color: '#000'
  },
  iconContainer: {
    position: 'absolute',
    paddingHorizontal: 10,
    zIndex: 1,
    right: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dropdownList: {
    display: 'none',
    position: 'absolute',
    top: 48,
    right: 0,
    left: 0,
    zIndex: 20,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderWidth: 1,
    borderTopWidth: 0,
    overflow: 'hidden'
  },
  openDropdownList: {
    display: 'flex'
  },
  dropdownItem: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    height: 44,
    justifyContent: 'center'
  },
  activeDropdownItem: {
    backgroundColor: '#7C54FF'
  },
  dropdownItemText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#000'
  },
  activeDropdownItemText: {
    color: '#FFF'
  }
});
export default styles;
//# sourceMappingURL=style.js.map