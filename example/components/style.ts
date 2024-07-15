import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  dropdownInputContainer: {
    borderRadius: 6,
    overflow: 'hidden',
  },
  focusedDropdownInputContainer: {
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
  dropdownToggler: {
    height: 48,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#C7C7C7',
  },
  activeDropdownText: {
    color: '#000',
  },
  iconContainer: {
    paddingHorizontal: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownList: {
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: 20,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopWidth: 0,
    overflow: 'hidden',
  },
  dropdownItem: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDropdownItem: {
    backgroundColor: '#145DA0',
  },
  dropdownItemText: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#000',
  },
  activeDropdownItemText: {
    color: '#FFF',
  },
});

export default styles;
