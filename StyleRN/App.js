import {View, Text, StyleSheet} from 'react-native'


export default function App(){
  return (
    <View style={styles.container}>

      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          darkmode text
          <Text style={styles.boldText}>in bold</Text>
        </Text>
      </View>

       <View style={[styles.box, styles.lightBlueBox, styles.shadow]}>
        <Text>
          LightBlueBox
        </Text>
       </View>

       <View style={[styles.box, styles.lightGreenBox, styles.andriodShadow]}>
        <Text>
          LightGreenBox
        </Text>
       </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {flex: 1, backgroundColor : "plum", padding:30},
  darkMode : {
    backgroundColor : 'black'
  },
  darkModeText : {
    color : 'white'
  },
  boldText : {
     fontWeight : 'bold'
  },
  box : {width:250, height:250, paddingHorizontal:10, paddingVertical:5, marginHorizontal:5, marginVertical:5, borderWidth:2, borderColor:'purple', borderRadius:5},
  lightBlueBox : {backgroundColor : 'lightblue'},
  lightGreenBox : {backgroundColor : 'lightgreen'},
  shadow : {
    shadowColor:'#333333',
    shadowOffset: {
      width:6,
      height:6
    },
    shadowOpacity : 0.6,
    shadowRadius: 4   
  },
  andriodShadow : {
    elevation : 10
  }

})

