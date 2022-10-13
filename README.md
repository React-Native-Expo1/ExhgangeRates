# ExhgangeRates
Valuuttamuunnin joka hakee internetistä päivän kurssin, käytetään Pickeriä

asenna Picker:
npm install react-native-picker/picker

ope sano että joskus joutuu asentaan eri komennolla jos ei toimi:
npm install react-native-picker/picker --legacy-peer-deps

picker ei myöskään näkynyt ilman tyylejä:
picker: {
    width: 200,
  },


jos haluat että ios näppis häipyy kun painat näyttöä,

import {TouchableWithoutFeedback, Keyboard } from 'react-native';

 <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
     </TouchableWithoutFeedback>
