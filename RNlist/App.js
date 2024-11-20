import { StyleSheet, Text, View, ScrollView,SafeAreaView, StatusBar, FlatList, SectionList } from 'react-native';
import pokemanList from './data.json'
import groupedpokemanList from './grouped-data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollview}> */}
     {/* {pokemanList.map((pokeman) => {
      return (
        <View key={pokeman.id} style={styles.card}>
          <Text>{pokeman.type}</Text>
          <Text>{pokeman.name}</Text>
        </View>
      )
     })} */}
     <View style={styles.scrollview}>
     {/* <FlatList data={pokemanList} renderItem={({item}) => {
             return (
              <View key={item.id} style={styles.card}>
                <Text>{item.type}</Text>
                <Text>{item.name}</Text>
              </View>
            )
     }} keyExtractor={(item, index) => item.id.toString()} ItemSeparatorComponent={<View style={{height : 16}}/>} ListEmptyComponent={<Text>No items found</Text>} ListHeaderComponent={<Text style={styles.headerText}>Pokeman list</Text>} ListFooterComponent={<Text style={styles.footerText}>End of list</Text>} />
      */}
      <SectionList sections={groupedpokemanList} 
      renderItem={({item}) => {
        return (
          <View style={styles.card}>

            <Text style={styles.cardText}>{item}</Text>
            
          </View>
        )
      }}
      renderSectionHeader={({section}) => (
        <Text style={styles.sectionHeaderText}>{section.type}</Text>
      )}
      ItemSeparatorComponent={() => <View style={{height : 16}}/>}
      SectionSeparatorComponent={() => <View style={{height : 16}}/>}
      />
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop : StatusBar.currentHeight,
  },

  scrollview : {
    paddingHorizontal : 16
  },

  card : {
    backgroundColor : 'white',
    padding : 16,
    borderRadius : 8,
    borderWidth : 1,
    // marginBottom : 16
  },

  headerText : {
    fontSize : 24,
    marginBottom : 16,
    textAlign : 'center'
  },

  footerText : {
      fontSize : 24,
      marginTop : 12,
      textAlign: 'center'
  },
  sectionHeaderText : {
    backgroundColor : 'white',
    fontSize : 24,
    fontWeight : 'bold'
  }
});
