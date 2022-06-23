import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button } from 'react-native';



export default function App() {

  const [data, setData] = useState ({
    previous: null,
    sex: null,
    age: null,
    history: null,
    hypertension: false,
    hyperlipidemia: false,
    lowHDL: false,
    tobacco: false,
    diabetes: false,
    obesity: false,
    none: false,
  });

  const checkPreviousYes = () => {
    setData(previousState => {
      if (data.previous){
        return { ...previousState, previous: null };
      }
      return { ...previousState, previous: true };
    });
  }

  const checkPreviousNo = () => {
    setData(previousState => {
      if (data.previous || data.previous === null){
        return { ...previousState, previous: false };
      }
      return { ...previousState, previous: null };
    });
  }

  const checkSexMale = () => {
    setData(previousState => {
      if (data.sex === "male"){
        return { ...previousState, sex: null };
      }
      return { ...previousState, sex: "male" };
    });
  }

  const checkSexFemale = () => {
    setData(previousState => {
      if (data.sex === "female"){
        return { ...previousState, sex: null };
      }
      return { ...previousState, sex: "female" };
    });
  }

  const checkHistoryYes = () => {
    setData(previousState => {
      if (data.history){
        return { ...previousState, history: null };
      }
      return { ...previousState, history: true };
    });
  }

  const checkHistoryNo = () => {
    setData(previousState => {
      if (data.history || data.history === null){
        return { ...previousState, history: false };
      }
      return { ...previousState, history: null };
    });
  }

  const checkHypertension = () => {
    setData(previousState => {return {...previousState, hypertension: !data.hypertension, none:false}});
  }

  const checkLipidemia = () => {
    setData(previousState => {return {...previousState, hyperlipidemia: !data.hyperlipidemia, none:false}});
  }

  const checkLowHDL = () => {
    setData(previousState => {return {...previousState, lowHDL: !data.lowHDL, none:false}});
  }

  const checkTobacco = () => {
    setData(previousState => {return {...previousState, tobacco: !data.tobacco, none:false}});
  }

  const checkDiabetes = () => {
    setData(previousState => {return {...previousState, diabetes: !data.diabetes, none:false}});
  }

  const checkObesity = () => {
    setData(previousState => {return {...previousState, obesity: !data.obesity, none:false}});
  }

  const checkNone = () => {
    setData(previousState => {return {...previousState, hypertension:false, hyperlipidemia:false, lowHDL:false, tobacco:false, diabetes:false, obesity:false, none: !data.none}});
  }

  return (
    <View style={styles.container}>

      <ImageBackground source={require('./background.png')} resizeMode="cover" style={styles.image}>

      <Text></Text>

      <Text style={styles.header}>Heart Attack Prevention Patient Screening App</Text>

      <Text style={{flex:.1}}></Text>

      <View style={styles.section}>
        <Text style={styles.mainText}>Heart disease, Stents, or Bypass:</Text>
        <Text style={styles.text}>Yes</Text>
        <Checkbox style={styles.checkbox} value={data.previous && data.previous !== null} onValueChange={checkPreviousYes} />
        <Text style={styles.text}>No</Text>
        <Checkbox style={styles.checkbox} value={!data.previous && data.previous !== null} onValueChange={checkPreviousNo} />
      </View>

      <View style={styles.section}>
        <Text style={styles.mainText}>Sex:</Text>
        <Text style={styles.text}>Male</Text>
        <Checkbox style={styles.checkbox} value={(data.sex === "male")} onValueChange={checkSexMale} />
        <Text style={styles.text}>Female</Text>
        <Checkbox style={styles.checkbox} value={(data.sex === "female")} onValueChange={checkSexFemale} />
      </View>

      <View style={styles.section}>
        <Text style={styles.mainText}>Age:</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.mainText}>Family History:</Text>
        <Text style={styles.text}>Yes</Text>
        <Checkbox style={styles.checkbox} value={data.history && data.history !== null} onValueChange={checkHistoryYes} />
        <Text style={styles.text}>No</Text>
        <Checkbox style={styles.checkbox} value={!data.history && data.history !== null} onValueChange={checkHistoryNo} />
      </View>

      <Text style={styles.mainText}>Risk Factors:</Text>
      <View style={styles.section}>
        <Text style={styles.text}>{'\t\t'}Hypertension</Text>
        <Checkbox style={styles.checkbox} value={data.hypertension} onValueChange={checkHypertension} />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>{'\t\t'}Hyperlipidemia</Text>
        <Checkbox style={styles.checkbox} value={data.hyperlipidemia} onValueChange={checkLipidemia} />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>{'\t\t'}Low HDL</Text>
        <Checkbox style={styles.checkbox} value={data.lowHDL} onValueChange={checkLowHDL} />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>{'\t\t'}Tobacco Use</Text>
        <Checkbox style={styles.checkbox} value={data.tobacco} onValueChange={checkTobacco} />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>{'\t\t'}Diabetes</Text>
        <Checkbox style={styles.checkbox} value={data.diabetes} onValueChange={checkDiabetes} />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>{'\t\t'}Obesity</Text>
        <Checkbox style={styles.checkbox} value={data.obesity} onValueChange={checkObesity} />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>{'\t\t'}None</Text>
        <Checkbox style={styles.checkbox} value={data.none} onValueChange={checkNone} />
      </View>

    <Text></Text>

    <View style={styles.button}>
      <Button title="   Submit   "></Button>
    </View>

    </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  mainText: {
    fontSize: 17,
    fontWeight: "bold",
    paddingLeft: 8,
    color:"white"
  },
  text: {
    fontSize: 18,
    paddingLeft: 8,
    color:"white"
  },
  input: {
    height:39,
    borderWidth: 1,
    padding: 10,
    borderColor: "transparent",
    borderBottomColor: "white",
    color: "white",
    fontSize: 18
  },
  container: {
    flex: 1,
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: "#000000c0"
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 3,
    borderColor: "white",
  },
  button: {
    alignItems: "center",
  },
  image: {
    flex: 1,
    height:null,
    width: null,
  },
});