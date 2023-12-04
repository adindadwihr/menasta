/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
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
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
            backgroundColor: Colors.pastel2,
          }}>
          <Text style={styles.title}>MENASTA</Text>
          <Text style={styles.text}>An innovative solution to facilitate city governments or related agencies in efficiently tracking, managing, and maintaining their asset inventories.</Text>

          <Text style={styles.title}>DEVELOPER</Text>
          <Text style={styles.text}>Adinda Dwi Humaira</Text>
          <Text style={{
            fontSize: 17,
            color: Colors.white,
            marginTop: -3,
            paddingHorizontal: 20,
            fontWeight: 'bold',
            textAlign: 'justify'
          }}>(21/478319/SV/19263)</Text>

          <Text style={styles.title}>FEATURES</Text>
          <Text style={styles.text}>1. Asset Data Recording</Text>
          <Text style={{
            fontSize: 17,
            color: Colors.white,
            marginTop: -3,
            paddingHorizontal: 20,
            fontWeight: 'bold',
            textAlign: 'justify'
          }}>2. Asset Monitoring and Management</Text>
          <Text style={{
            fontSize: 17,
            color: Colors.white,
            marginTop: -3,
            paddingHorizontal: 20,
            fontWeight: 'bold',
            textAlign: 'justify'
          }}>3. Asset Location Tracking</Text>
          <Text style={{
            fontSize: 17,
            color: Colors.white,
            marginTop: -3,
            paddingHorizontal: 20,
            fontWeight: 'bold',
            textAlign: 'justify'
          }}>4. Asset History</Text>

          <Text style={styles.title}>STACK</Text>
          <Text style={styles.text}>1. React Native</Text>
          <Text style={{
            fontSize: 17,
            color: Colors.white,
            marginTop: -3,
            paddingHorizontal: 20,
            fontWeight: 'bold',
            textAlign: 'justify'
          }}>2. HTML</Text>
          <Text style={{
            fontSize: 17,
            color: Colors.white,
            marginTop: -3,
            paddingHorizontal: 20,
            fontWeight: 'bold',
            textAlign: 'justify'
          }}>3. LeafletJS</Text>
          <Text style={{
            fontSize: 17,
            color: Colors.white,
            marginTop: -3,
            paddingHorizontal: 20,
            fontWeight: 'bold',
            textAlign: 'justify'
          }}>4. Google Sheets</Text>
          <Text style={{
            fontSize: 17,
            color: Colors.white,
            marginTop: -3,
            paddingHorizontal: 20,
            fontWeight: 'bold',
            textAlign: 'justify'
          }}>5. Apps Script</Text>
          <Text style={{
            fontSize: 17,
            color: Colors.white,
            marginTop: -3,
            paddingHorizontal: 20,
            fontWeight: 'bold',
            textAlign: 'justify'
          }}>6. FontAwesome5</Text>
          <Text style={{
            fontSize: 17,
            color: Colors.white,
            marginTop: -3,
            paddingHorizontal: 20,
            fontWeight: 'bold',
            textAlign: 'justify'
          }}>7. GitHub</Text>

          <Text style={styles.title}>CONTACT AND SUPPORT</Text>
          <Text style={styles.text}>If you have any questions, would like to provide feedback, make a collaboration, or encounter technical issues, please feel free to contact us through the link below.</Text>
          <LearnMoreLinks/>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    color: Colors.white
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white
  },
  sectionDescription: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
  title: {
    fontSize: 25,
    color: Colors.white,
    marginTop: 20,
    paddingHorizontal: 20,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 17,
    color: Colors.white,
    marginTop: 2,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    textAlign: 'justify'

  }
});

export default App;
