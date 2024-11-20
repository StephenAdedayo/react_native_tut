import { View } from "react-native";
import Core from "./components/Core";
import Greet from "./components/Greet";


export default function App(){
  return(
    <View style={{backgroundColor: 'plum', flex:1, padding: '30px'}}>
         <Core />
         <Greet name={'Bruce Wayne'}/>
         <Greet name={'Clark Kent'}/>
    </View>
  )
}