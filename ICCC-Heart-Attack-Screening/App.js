import Checkbox from 'expo-checkbox';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Linking } from 'react-native';


export default function App() {


  showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      return text;
    };
  }


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
    showQuestions: true,
    ctScoringNeeded: false,
    riskCount: 0,
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
    setData(previousState => {return {...previousState, hypertension: !data.hypertension, none:false, riskCount:data.riskCount + 1}});
  }

  const checkLipidemia = () => {
    setData(previousState => {return {...previousState, hyperlipidemia: !data.hyperlipidemia, none:false, riskCount:data.riskCount + 1}});
  }

  const checkLowHDL = () => {
    setData(previousState => {return {...previousState, lowHDL: !data.lowHDL, none:false, riskCount:data.riskCount + 1}});
  }

  const checkTobacco = () => {
    setData(previousState => {return {...previousState, tobacco: !data.tobacco, none:false, riskCount:data.riskCount + 1}});
  }

  const checkDiabetes = () => {
    setData(previousState => {return {...previousState, diabetes: !data.diabetes, none:false, riskCount:data.riskCount + 1}});
  }

  const checkObesity = () => {
    setData(previousState => {return {...previousState, obesity: !data.obesity, none:false, riskCount:data.riskCount + 1}});
  }

  const checkNone = () => {
    setData(previousState => {return {...previousState, hypertension:false, hyperlipidemia:false, lowHDL:false, tobacco:false, diabetes:false, obesity:false, none: !data.none, riskCount:0}});
  }

  const submit = () => {
    if (data.previous){
      setData(previousState => {return {...previousState, showQuestions: false, ctScoringNeeded: false}});
    } else {
      if (data.sex === "male"){
        if (data.age < 30){
          setData(previousState => {return {...previousState, showQuestions: false, ctScoringNeeded: false}});
        } else {
          if (data.age < 45){
            console.log(data.riskCount);
            if (data.riskCount > 1 || data.history){
              setData(previousState => {return {...previousState, showQuestions: false, ctScoringNeeded: true}});
            } else {
              setData(previousState => {return {...previousState, showQuestions: false, ctScoringNeeded: false}});
            }
          } else {
            setData(previousState => {return {...previousState, showQuestions: false, ctScoringNeeded: true}});
          }
        }
      } else {
        if (data.age < 30){
          setData(previousState => {return {...previousState, showQuestions: false, ctScoringNeeded: false}});
        } else {
          if (data.age < 55){
            if (data.riskCount > 1 || data.history){
              setData(previousState => {return {...previousState, showQuestions: false, ctScoringNeeded: true}});
            } else {
              setData(previousState => {return {...previousState, showQuestions: false, ctScoringNeeded: false}});
            }
          } else {
            setData(previousState => {return {...previousState, showQuestions: false, ctScoringNeeded: true}});
          }
        }
      }
    }
  }

  const restart = () => {
    setData({
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
      showQuestions: true,
      ctScoringNeeded: false,
      riskCount: 0,
    });
  }
  
  if (data.showQuestions){
    return (
      <View style={styles.container}>

        <ImageBackground source={require('./background.png')} resizeMode="contain" style={styles.image}>


        <Text style={styles.header}>Prevención de Infarto de Miocardio Detección de Pacientes</Text>

        <Text style={{flex:.1}}></Text>

        <View style={styles.section}>
          <Text style={styles.mainText}>Enfermedad Cardíaca Conocida, Colocación de Stents o Cirugía de Derivación?</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Sí</Text>
          <Checkbox style={styles.checkbox} value={data.previous && data.previous !== null} onValueChange={checkPreviousYes} />
          <Text style={styles.text}>No</Text>
          <Checkbox style={styles.checkbox} value={!data.previous && data.previous !== null} onValueChange={checkPreviousNo} />
        </View>

        <View style={styles.section}>
          <Text style={styles.mainText}>Género:</Text>
          <Text style={styles.text}>Hombre</Text>
          <Checkbox style={styles.checkbox} value={(data.sex === "male")} onValueChange={checkSexMale} />
          <Text style={styles.text}>Mujer</Text>
          <Checkbox style={styles.checkbox} value={(data.sex === "female")} onValueChange={checkSexFemale} />
        </View>

        <View style={styles.section}>
          <Text style={styles.mainText}>Años:</Text>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setData(previousState => {return {...previousState, age:text}})}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.mainText}>Historia Familiar de Infarto:</Text>
          <Text style={styles.text}>Sí</Text>
          <Checkbox style={styles.checkbox} value={data.history && data.history !== null} onValueChange={checkHistoryYes} />
          <Text style={styles.text}>No</Text>
          <Checkbox style={styles.checkbox} value={!data.history && data.history !== null} onValueChange={checkHistoryNo} />
        </View>

        <Text style={styles.mainText}>Factores de Riesgo:</Text>
        <View style={styles.section}>
          <Text style={styles.text}>{'\t\t'}Hipertensión</Text>
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
          <Text style={styles.text}>{'\t\t'}Tabaquismo</Text>
          <Checkbox style={styles.checkbox} value={data.tobacco} onValueChange={checkTobacco} />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>{'\t\t'}Diabetes</Text>
          <Checkbox style={styles.checkbox} value={data.diabetes} onValueChange={checkDiabetes} />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>{'\t\t'}Obesidad</Text>
          <Checkbox style={styles.checkbox} value={data.obesity} onValueChange={checkObesity} />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>{'\t\t'}Ninguno</Text>
          <Checkbox style={styles.checkbox} value={data.none} onValueChange={checkNone} />
        </View>

      <Text></Text>

      <View style={styles.button}>
        <Button title="Enviar" onPress={submit}></Button>
      </View>

      </ImageBackground>

      </View>
    );
  }

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };
  
  let positiveResults = 
  
    <View style={styles.container}>

      <ImageBackground source={require('./background.png')} resizeMode="contain" style={styles.image}>


        <Text style={styles.header}>Prevención de Infarto de Miocardio Detección de Pacientes</Text>

        <View style={styles.finalSection}>
          <Text style={styles.finalText}>Puntuación de Calcio por TAC{"\n"}La ubicación más cercana en la Ciudad de México</Text>
        </View>

        <View style={styles.button}>
          <OpenURLButton url="https://www.nationalhearthealth.org/mexico-national-heart-health" children="Más Información" />
          <Button title="Reiniciar" onPress={restart}/>
        </View>

      </ImageBackground>

    </View>;

let negativeResults = 
  
  <View style={styles.container}>

    <ImageBackground source={require('./background.png')} resizeMode="contain" style={styles.image}>


      <Text style={styles.header}>Prevención de Infarto de Miocardio Detección de Pacientes</Text>

      <View style={styles.finalSection}>
        <Text style={styles.finalText}>Reducción de Riesgos Sin CAC</Text>
      </View>

      <View style={styles.button}>
          <Button title="Reiniciar"  onPress={restart}/>
      </View>

    </ImageBackground>

  </View>;

  if (data.ctScoringNeeded){
    return (positiveResults);
  }
  return (negativeResults);
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    paddingTop: 28,
  },
  mainText: {
    fontSize: 17,
    fontWeight: "bold",
    paddingLeft: 8,
    paddingRight: 8,
    color:"white",
  },
  text: {
    fontSize: 18,
    paddingLeft: 8,
    paddingRight: 8,
    color:"white"
  },
  finalText: {
    fontSize: 26,
    fontWeight: "bold",
    paddingLeft: 8,
    paddingRight: 8,
    color:"white",
    textAlign: "center",
    justifyContent: "center",
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
  finalSection: {
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: 'center',
    flex: .75,
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
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height:null,
    width: null,
  },
});
