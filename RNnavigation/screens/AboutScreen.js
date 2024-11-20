import {View, Text, StyleSheet, Button} from 'react-native'
import { useLayoutEffect } from 'react'

export default function AboutScreen({route, navigation}){
    const {name} = route.params

    useLayoutEffect(() => {
   navigation.setOptions({
    title : name
   })
    }, [navigation, name])

  return (
    <View style={styles.container}>
        <Text style={styles.text}>About {name}</Text>
        <Button title='Update the name' onPress={() => navigation.setParams({
            name : 'Stephen'
        })}/>
        <Button title='Go back with data' onPress={() => navigation.navigate('Home', {result : 'data from about'})}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontSize : 24,
        fontWeight : 'bold',
        marginBottom : 16
    }
})


// export default AboutScreen
