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
 import { Provider as PaperProvider } from 'react-native-paper';
 
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
  
 const saluda = (text) =>{ return( <Text style ={{color: 'blue',fontSize : 25} } >Hola {text}</Text>) }

 const saluda2 = () => {
  return(
    <View>
  {saluda('caracola') }
   {saluda('kurasan') }
  </View>
  )
 }

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
  
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
   const isMarverl = true;
 
   return (

    <PaperProvider>
      {
      isMarverl&&
      saluda('Spiderman')
      }
      {saluda2()}

</PaperProvider>
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
 