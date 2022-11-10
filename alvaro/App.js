/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Button } from 'react-native-paper';
 import { Switch } from 'react-native-paper';
 import { Chip } from 'react-native-paper';
 import { Surface, Text } from 'react-native-paper';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   useColorScheme,
   View,
 } from 'react-native';
 import { TextInput } from 'react-native-paper';
  
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
  
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod */
 const Section = ({ children, title }) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
  
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
  
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
   const [isSwitchOn, setIsSwitchOn] = React.useState(false);
   const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar
         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
         backgroundColor={backgroundStyle.backgroundColor}
       />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <Header />
 

         
         
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
            <View style={styles.main} >
            
          <Text style={{fontSize : 20}}>TextInput(Email)</Text>                   
         <TextInput label="Email" placeholder="Email: " />

       

      

           <Text style={styles.buttAlien1} >Button(amb text i icona )</Text>
           <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')}>
    Alien
  </Button>
  <Button icon="alien" mode="contained" textColor='black' onPress={() => console.log('Pressed')}>
    Alien
  </Button>
  <Button icon="alien" mode="outdated" textColor='purple' onPress={() => console.log('Pressed')}>
    Alien
  </Button>

  <Button icon="alien" mode="text" textColor='purple' onPress={() => console.log('Pressed')}>
    Alien
  </Button>

           <Text style={styles.main}>Switch Necessites un descans?</Text>
           
           <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color = {'red'} />

           <Surface style={styles.main} elevation={4}>
           <Text style={styles.buttAlien1} >Botó dins un d'component Surface</Text>
           <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')}>
    Alien
  </Button>
  </Surface>
           <View style={styles.row}>
           
           <Chip icon="web" compact = {true} onPress={() => console.log('Pressed')} style={styles.chip}>Internet</Chip>
           <Chip icon="wifi" compact = {true} onPress={() => console.log('Pressed')} style={styles.chip}>Wifi</Chip>
           
           </View>
           </View>



         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };


  
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   main: {
    margin: 20,
    fontSize : 20
   },
   buttAlien1:{
    fontSize : 20,
    marginTop : 20
   },

   container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center"
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12
  },
  chip: {
    margin: 4
  },
  chipText: {
    color: "#ffffff"
  }

 });
  
 export default App;
 