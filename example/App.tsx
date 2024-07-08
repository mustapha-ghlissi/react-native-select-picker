/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import DropdownPicker from '@mustapha-ghlissi/react-native-select-picker';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Basic dropdown</Text>
        <DropdownPicker
          borderColor="#000"
          items={[
            {
              label: 'BMW',
              value: 1,
            },
            {
              label: 'Mercedes Benz',
              value: 2,
            },
            {
              label: 'Audi',
              value: 3,
            },
            {
              label: 'Golf 6',
              value: 4,
            },
            {
              label: 'Passat B9',
              value: 5,
            },
          ]}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Custom dropdown</Text>
        <DropdownPicker
          displayItems={3}
          outlineColor="purple"
          borderColor="blue"
          items={[
            {
              label: 'Chevrolet',
              value: 1,
            },
            {
              label: 'Ford',
              value: 2,
            },
            {
              label: 'Tesla',
              value: 3,
            },
          ]}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Advanced dropdown</Text>
        <DropdownPicker
          displayItems={4}
          placeholder="Choose an advanced option"
          styles={{
            dropdownToggler: {
              height: 60,
            },
            dropdownList: {top: 62, borderWidth: 2},
            inputContainer: {
              borderWidth: 2,
            },
            activeItem: {
              backgroundColor: 'red',
            },
          }}
          outlineColor="red"
          borderColor="#E2E2E2"
          items={[
            {
              label: 'Toyota',
              value: 1,
            },
            {
              label: 'Subaru',
              value: 2,
            },
            {
              label: 'Nissan',
              value: 3,
            },
            {
              label: 'Isuzu',
              value: 4,
            },
            {
              label: 'Mazda',
              value: 5,
            },
            {
              label: 'Mitsubishi',
              value: 6,
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  formGroup: {
    gap: 5,
  },
});
