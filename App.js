import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import SvgTop from './components/SvgTop';
const {width, height} = Dimensions.get('window')
import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop/>
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Hi</Text>
        <Text style={styles.subTitle}>Sign In to your account</Text>
        <TextInput 
          placeholder="me@email.com"
          style={styles.textInput}
        />
        <TextInput 
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <Button/>
        <Text style={styles.forgotPassword}>Don't have an account?</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10
  },
  
});
