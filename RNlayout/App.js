import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
     <Box style={{ backgroundColor : 'blue'}}>box 1</Box>
     <Box style={{ backgroundColor : 'red'}}>box 2</Box>
     <Box style={{ backgroundColor : 'midnightblue' }}>box 3</Box>
     <Box style={{ backgroundColor : 'gray', position: 'absolute', top : 100,left:100 }}>box 4</Box>
     <Box style={{ backgroundColor : 'indigo' }}>box 5</Box>
     <Box style={{ backgroundColor : 'yellow' }}>box 6</Box>
     <Box style={{ backgroundColor : 'green' }}>box 7</Box>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection : 'row',
    // justifyContent: 'center', 
    // alignItems : 'flex-start',
    flex : 1,
    // gap:10,
    // height :300,
    // flexWrap : 'wrap',
    // width:300,
   borderWidth : 6,
   borderColor : 'black'
  }
});
