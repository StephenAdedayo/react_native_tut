import { useState } from "react";
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
const logoImg = require('../assets/adaptive-icon.png')

export default function Core(){

  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (    
    <View style={{backgroundColor:'plum', flex:1, padding:30}}>
      <StatusBar backgroundColor={'blue'} barStyle={'light-content'} />
      <ActivityIndicator size={'large'} color={'midnightblue'} animating={false}/>
     
     <Button title="Alert" onPress={() => Alert.alert('Invalid data')}/>
     <Button title="Alert 2" onPress={() => Alert.alert('Invalid data', 'DOB incorrect')} color={'midnightblue'} />
     <Button title="Alert 3" onPress={() => Alert.alert('Invalid data', 'DOB incorrect', [
      {text : 'Cancel', onPress: () => console.log('cancel pressed')},
      {text : 'Ok', onPress: () => console.log('ok pressed')}
     ])} color={'midnightblue'} />

       {/* <Text> <Text style={{color:'red'}}>Hello</Text> World</Text>
        <Image source={logoImg} style={{width:200, height:200}}/>
        <Image source={{uri : 'https://picsum.photos/200'}} style={{width:200, height:200}}/>

        <ImageBackground source={logoImg} style={{flex:1}}>
          <Text>Hey, i'm there</Text>
        </ImageBackground> */}
   <Pressable onPress={() => console.log('image pressed') }>
<Image source={logoImg} style={{width:200, height:200}}/>
</Pressable>
<ScrollView>
  <Pressable onPress={() => console.log('text pressed')}>
   <Text>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores deleniti ipsa suscipit ad, beatae similique odit soluta adipisci cupiditate quas consectetur, eveniet officia, repudiandae rem impedit! Aperiam ad maiores rem consequuntur vel libero porro quia velit necessitatibus magnam sapiente sed maxime vitae soluta perspiciatis illum, iure similique quam odit esse minus eligendi veritatis error id? Voluptatum praesentium reprehenderit non, sed nesciunt maxime fugiat fugit officiis provident dolores, ipsa a omnis nulla alias! Ad dolorem, reiciendis magni placeat nobis minima, molestias alias officia officiis cum dolores, illo provident. Quibusdam fugiat doloremque dignissimos animi molestiae voluptates magni pariatur maiores, et, itaque in rerum minus at ipsa ipsum culpa ut unde harum alias accusantium quidem. Iusto voluptatibus culpa vitae ea laudantium excepturi tenetur ut impedit molestiae sapiente, eius quisquam. Nisi eos sint iusto sed provident vero repellat officiis aliquid. Earum neque possimus qui provident incidunt dolorem voluptate nemo quasi non magni! Hic voluptates saepe perferendis. Sit ea suscipit quod nulla excepturi architecto laudantium aperiam quam at, natus possimus totam molestiae, temporibus quia, eius tenetur voluptas culpa voluptates necessitatibus vero. Enim eveniet asperiores corporis accusamus impedit aperiam quis sed harum adipisci. Dolore odit in impedit magni, quos optio suscipit ad corrupti reiciendis sunt tempore molestias perferendis dolorum quasi? Architecto excepturi impedit voluptates perspiciatis quaerat. Aperiam perspiciatis culpa esse tempore. Possimus tempore, similique corporis officia vel aperiam sed, dicta veniam hic nostrum obcaecati nisi non, pariatur blanditiis impedit optio omnis. Aperiam, at. Magnam facere quidem, at id, repudiandae nesciunt ab voluptas deleniti hic cum sapiente incidunt dolores, dignissimos provident molestiae quae enim magni molestias nulla. Iusto nulla, saepe qui accusantium recusandae et error voluptates praesentium, suscipit distinctio delectus esse aperiam quod assumenda doloribus odio culpa sit optio vero corporis laudantium doloremque eveniet ea quaerat? Numquam ipsam quia cum expedita accusantium laudantium, nulla itaque! Cum vitae suscipit debitis voluptatum, numquam omnis sint quae provident earum officiis quis quam labore illum doloribus corporis pariatur ex, accusantium officia odio eveniet. Ullam assumenda eos quis corporis sed totam cupiditate vel quia, ipsa natus deleniti, repellendus necessitatibus. Nihil ipsum dignissimos illum optio delectus repellendus dicta beatae, ut recusandae adipisci vel dolores corrupti quis sint veniam ipsa aliquid nemo laborum dolorem quo ullam nam in atque illo? Nulla fugiat provident delectus ut vitae aut suscipit voluptatibus sunt illo, laudantium labore dolorum minus magni. Assumenda cumque ducimus ex culpa blanditiis exercitationem quam voluptates non minus repellendus consequuntur deleniti, possimus, placeat distinctio, asperiores expedita. Et consectetur ratione velit, tempore porro eveniet sunt exercitationem sapiente autem consequuntur expedita similique dolorem quidem amet facilis eum, laboriosam corrupti esse at. Id eveniet dolor quibusdam necessitatibus! Exercitationem mollitia blanditiis nemo sit at cumque esse id! A quos, cum voluptatum blanditiis corrupti, accusantium incidunt rem necessitatibus quibusdam vero aut amet minus repellat repellendus sapiente earum dolore sequi adipisci veritatis atque. Fugiat eos, at nihil veniam delectus eligendi vel voluptatem aliquid dicta asperiores accusamus dolorem. Consequuntur laborum soluta dolores iusto eum autem repudiandae sapiente reiciendis sunt corrupti, rem eligendi nihil modi ut, a doloremque praesentium ipsa. Quia amet consectetur, consequatur fuga tempore totam repellat id vel. Voluptas molestiae ipsam deserunt alias, magnam fugit animi minus, suscipit neque ea, voluptate harum. Quia dolore aspernatur quasi. Totam, corporis ad earum dolores aut praesentium pariatur officiis aperiam culpa perspiciatis, voluptas similique unde quod repellat rem eos optio libero quia, quidem labore deserunt. Porro, molestiae ad voluptatibus maxime rem suscipit. Ipsam ratione aliquam dolor esse laudantium. Quidem molestiae velit explicabo soluta, quod minima perspiciatis aspernatur, quo maiores dolores, repellendus sed cum. Quia, tenetur? Repellendus et fugiat eos sapiente possimus, labore dolor rerum a repellat cum perferendis. Mollitia quisquam a placeat nulla illo, consequuntur sint? Necessitatibus, iure. In alias blanditiis ipsa assumenda recusandae quo, ad nisi mollitia quis adipisci accusamus deserunt error nostrum culpa possimus dicta animi laboriosam quidem. Aliquid labore voluptas facere ullam deserunt, reprehenderit nisi vitae odit quasi omnis debitis unde, alias quas harum ea eos repellendus eveniet sint. Veniam dolorem, consequatur, temporibus reiciendis eaque tempore voluptates tenetur assumenda illo totam blanditiis omnis explicabo? Nemo consequuntur at porro beatae aperiam, maiores quod modi rem sequi unde nostrum, doloremque autem perspiciatis fuga. Illo commodi molestiae, optio maxime asperiores obcaecati alias eveniet vel suscipit praesentium cupiditate exercitationem. Velit hic, aperiam delectus modi quod labore quo ipsam, ipsum libero quis, atque eos maiores quos eveniet iste assumenda dignissimos! Odio, veniam aliquam neque, dicta autem, voluptate perferendis quis porro ad ex laudantium sunt repellat sed adipisci soluta iure. Eos voluptatibus cumque, eum autem id nam perspiciatis eligendi vitae enim reiciendis odio iure sit sequi delectus quas! Consequatur eveniet totam, atque fugit quam reprehenderit tempora velit, quisquam cum, obcaecati esse. Nemo consequuntur, sed dolorum odio commodi qui aut eum exercitationem explicabo, omnis error repudiandae natus totam tenetur? Delectus deserunt, mollitia ab, natus iure dolorem facilis est porro totam voluptatem architecto modi, inventore cupiditate velit officiis corrupti tempora saepe officia quam reiciendis eius error ut maxime? Maiores maxime optio dolores repudiandae quasi facilis nobis nostrum. Similique vitae quae minus totam nisi? Praesentium, eveniet voluptatibus consequuntur corporis saepe itaque voluptatem. Dolores distinctio mollitia eaque at magnam tenetur quisquam voluptates exercitationem a dolorum error, odit vitae molestias minima culpa. Officiis atque ipsam error? Nisi repudiandae explicabo, ratione tempore possimus autem quasi modi tempora. Dolores saepe odio ea, delectus suscipit quam officia, error, exercitationem ipsam voluptas assumenda autem cum eos similique ab. Iste repellat veritatis accusamus deleniti esse consequuntur quo ducimus maiores illo corrupti itaque porro tenetur repudiandae, eveniet suscipit tempora quae blanditiis maxime quidem vel temporibus sapiente iure amet sunt? Numquam eum, nemo eveniet error accusantium cum quos et quidem, rem, exercitationem mollitia maxime quis atque sunt. Cumque laborum ad laudantium ab vero illo explicabo labore itaque expedita quasi at recusandae consequatur officia ex, repellat quae eligendi voluptatem quis porro dolore eum assumenda? Reprehenderit earum, odio sequi nisi sint laboriosam veniam, suscipit est accusamus voluptatem illo! Debitis odit, quas nisi quo impedit, consequatur ex perferendis eos, fugiat omnis adipisci inventore veritatis! Vel deleniti ullam enim error consequuntur quidem beatae earum quod molestiae odit, sed unde, hic eos a minus molestias.
   </Text>
   </Pressable>
   <Image source={logoImg} style={{width:200, height:200}}/>


   <Modal visible={isModalOpen} onRequestClose={() => setIsModalOpen(false)} animationType="fade" presentationStyle="formSheet" >
    <View style={{backgroundColor:'gray', flex:1, padding:30}}>
      <Text>Modal reviewed</Text>
      <Button title="close" onPress={() => setIsModalOpen(false)}/>
    </View>
   </Modal>

   </ScrollView>
   <Button title="Press" onPress={() => setIsModalOpen(true)} color={'midnightblue'} />
    </View>
  )
}