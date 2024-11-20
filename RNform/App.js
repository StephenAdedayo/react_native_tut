// import { useState } from 'react';
// import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native';

// export default function App() {

//   const [name, setName] = useState('')
//   const [isDarkMode, setIsDarkMode] = useState(false)

//   return (
//     <SafeAreaView style={styles.container}>
//       <TextInput style={styles.input}  value={name} onChangeText={setName} placeholder='your email' secureTextEntry keyboardType='numeric' autoCorrect={false} autoCapitalize='none'/>
//       <TextInput style={[styles.input, styles.multilineText]} placeholder='message' multiline/>
//       <Text style={styles.text}>My name is {name}</Text>
//       <View style={styles.switchContainer}>
//         <Text style={styles.text}>Dark Mode</Text>
//          <Switch  value={isDarkMode} onValueChange={() => setIsDarkMode(prev => !prev)} trackColor={{false : '#767577', true: 'lightblue'}} thumbColor={'#f4f3f4'}/>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: StatusBar.currentHeight
//   },
//   input : {
//     height : 40,
//     padding : 10,
//     margin : 12,
//     borderWidth : 1
//   },
//   text : {
//     fontSize : 30,
//     padding : 10
//   },
//   multilineText : {
//     minHeight : 100,
//     textAlignVertical : 'top'
//   },
//   switchContainer : {
//     flexDirection : 'row',
//     alignItems : 'center',
//     justifyContent : 'space-between',
//     paddingHorizontal : 10
//   }
// });



import { useState } from 'react'
import {SafeAreaView, Text, View, TextInput, StyleSheet, Button, Image, KeyboardAvoidingView, Platform} from 'react-native'

export default function App(){

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

 const validateForm = () => {
  
  let errors = {}

  if(!username)  errors.username = 'Username is required'
  if(!password)  errors.password = 'Password is required'
  
  setErrors(errors)

  return Object.keys(errors).length === 0

 }

 const handleSubmit = () => {
  if(validateForm()){
    console.log('submitted', username, password);
    setPassword('')
    setUserName('')
    setErrors({})
  }

 }

    return (
      // <SafeAreaView>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={styles.container}>
     <View style={styles.form}>

      <Image source={require('./assets/adaptive-icon.png')}  style={styles.image}/>
       <Text style={styles.label}>Username</Text>
       <TextInput style={styles.input} placeholder='Enter Your username' value={username} onChangeText={setUserName}/>

       {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}

       <Text style={styles.label}>Password</Text>
       <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry value={password} onChangeText={setPassword}/>
         
       {errors.password ? (<Text style={styles.errorText}>{errors.password}</Text>) : null}
       



       <Button title='Login' onPress={() => handleSubmit()}/>
     </View>
     </KeyboardAvoidingView>
      // </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  container  : {
    flex: 1,
    paddingHorizontal : 20,
    justifyContent : 'center',
    backgroundColor : '#f5f5f5'
  },

  form  : {
    backgroundColor : 'white',
    padding : 20,
    borderRadius : 10,
    shadowColor : 'black',
    shadowOffset : {
      width : 0,
      height : 2
    },
    shadowOpacity : 0.25,
    shadowRadius : 4,
    elevation : 5
  },
  label : {
    marginBottom : 5,
    fontSize : 16,
    fontWeight : "bold"
  },

  input : {
    borderColor : '#ddd',
    borderWidth : 1,
    height : 40,
    marginBottom : 15,
    padding : 10,
    borderRadius : 5
  },
  image : {
    height : 400,
    width : 200,
    alignSelf : 'center',
    marginBottom : 50
  },
  errorText : {
    color : 'red',
    marginBottom : 10
  }
})