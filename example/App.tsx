/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import DropdownPicker from './components/Dropdown';

function App(): React.JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Basic dropdown</Text>
        <DropdownPicker
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
          onSelectChange={selected => console.log(selected)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Custom dropdown</Text>
        <DropdownPicker
          displayItems={3}
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
          onSelectChange={selected => console.log(selected)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Advanced dropdown</Text>
        <DropdownPicker
          multiple={true}
          displayItems={4}
          placeholder="Choose an advanced option"
          borderWidth={2}
          styles={{
            dropdownToggler: {
              height: 55,
            },
          }}
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
          onSelectChange={selected => console.log(selected)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Inline dropdown</Text>
        <DropdownPicker
          multiple={true}
          displayItems={6}
          placeholder="Choose an advanced option"
          borderWidth={2}
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
          onSelectChange={selected => console.log(selected)}
          inline
        />
      </View>
    </ScrollView>
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
