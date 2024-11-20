import { Text, View } from "react-native";


export default function Greet({name}){
    return (
        <View style={{padding:30, marginBottom:10}} >
            <Text>{name}</Text>
        </View>
    )
}