import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList, ActivityIndicator, TextInput, Button } from 'react-native';

export default function App() {

  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState('')

  const fetchData = async (limit = 10) => {

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    if(!response.ok){
      throw new Error('error occured')
    }
    const data = await response.json()
    setPostList(data)
    setIsLoading(false)
    setError('')
    } catch (error) {
      console.log(error.message);
      setIsLoading(false)
      setError('failed to fetch')
      
    }
  }


  const addPost = async () => {

    setIsPosting(true)
    
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({
          title : postTitle,
          body : postBody
        })
      })
      // if(!response.ok){
      //   throw new Error('could not post')
      // }
  
      const newPost = await response.json()
  
      setPostList([newPost, ...postList])
      setPostTitle('')
      setPostBody('')
      setIsPosting(false)
      setError('')
  
    } catch (error) {
      console.log(error.message);
      setIsLoading(false)
      setError('failed to add new post')
      
    }
  }


  const handleRefresh = () => {
    setRefreshing(true)
    fetchData(20)
    setRefreshing(false)
  }

  useEffect(() => {
   fetchData()
  }, [])

  if(isLoading){
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size='large' color={'0000ff'}/>
        <Text>Loading....</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      { error ? (
        <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        </View>
       ) : (
      <>
       <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='post title' value={postTitle} onChangeText={setPostTitle}/>
        <TextInput style={styles.input} placeholder='post body' value={postBody} onChangeText={setPostBody}/>
       <Button title={isPosting ? 'adding...' : 'Add'} disabled={isPosting} onPress={addPost} />
       </View>


     <View style={styles.listContainer}>
     <FlatList data={postList} renderItem={({item}) => {
      return (
        <View style={styles.card}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.bodyText}>{item.body}</Text>
        </View>
      )
     }} ItemSeparatorComponent={() => (
      <View style={{height : 16}}></View>
     )} ListEmptyComponent={<Text>No Post Found</Text>} ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>} ListFooterComponent={<Text style={styles.footerText}>End of List</Text>} refreshing={refreshing} onRefresh={handleRefresh} />
     </View>
     </>
     )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop : StatusBar.currentHeight
  },
  listContainer : {
   flex : 1,
   paddingHorizontal : 16
  },
  card : {
    backgroundColor : 'white',
    padding : 16,
    borderRadius : 8,
    borderWidth : 1
  },
  titleText : {
    fontSize : 30
  },
  bodyText : {
    fontSize : 24,
    color : '#666666'
  },
  headerText : {
    textAlign : 'center',
    fontSize : 30,
    marginBottom : 16
  },
  footerText : {
    textAlign : 'center',
    fontSize : 30,
    marginTop : 16
  },
  loadingContainer : {
    flex : 1,
    backgroundColor : '#f5f5f5',
    justifyContent : 'center',
    alignItems : 'center',
    paddingTop : StatusBar.currentHeight
  },
  inputContainer : {
    backgroundColor : 'white',
    padding : 16,
    borderRadius : 8,
    borderWidth : 1,
    margin : 16
  },
  input : {
    height : 40,
    borderColor : 'gray',
    borderWidth : 1,
    marginBottom : 8,
    padding : 8,
    borderRadius : 8
  },
  errorContainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: "center",
  },
});
