import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const URL = 'https://api.exchangerate.host/latest'

export default function App() {

  const [eur,setEur] = useState()
  const [result, setResult] = useState(0)
  const [rates, setRates] = useState([])
  const [rate, setRate] = useState()

useEffect(() => {
  fetch(URL)
    .then(response => response.json())
    .then((result) => {
      const tempRates = []
      tempRates.push({key: 'GBP', label: 'Punnat', value: result.rates.GBP})
      tempRates.push({key: 'SEK', label: 'Swedish crown', value: result.rates.SEK})
      setRates(tempRates)
}),(error) => {
  console.log(error)
}
},[])

const calculate=(text) => {
  setEur(text)
  setResult(text * rate)
}

const changeRate = (value) => {
  setRate(value)
  setResult(eur * value)
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <Text style={styles.heading}> Curency converter</Text>
      <Text>EUR</Text>
      <TextInput keyboardType='decimal-pad' value={eur} onChangeText={text => calculate(text) }placeholder='Amount of euros'/>
      <Picker style={styles.picker}
        onValueChange={(itemValue) => changeRate(itemValue)}
        selectedValue={rate}
      >
        {rates.map((currency) => (
          <Picker.Item key={currency.key} label={currency.label} value={currency.value} />
        ))
        
        }
      </Picker>
      <Text>{result.toFixed(2)}</Text>
    </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  picker: {
    width: 200,
  },
});
