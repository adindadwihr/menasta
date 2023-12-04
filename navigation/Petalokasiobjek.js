import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App'
import List from '../Listdatapetalokasiobjek'
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import React from 'react';
import Colors from './Colors';


const Tab = createBottomTabNavigator();

// Form input dari Github Pages
const forminput = 'https://adindadwihr.github.io/pgpbl-12/'

// Peta Web dari Github Pages
const webmap = 'https://adindadwihr.github.io/pgpbl-12/map.html'

function HomeScreen() {
    return (
        <ImageBackground
            source={require('../city.jpg')}
            style={styles.image}
        >
            <View style={{ padding: 50 }}>
                <Text style={styles.title}>MENASTA</Text>
                <Text style={styles.text}>Manajemen Inventaris Aset Kota</Text>
                
            </View>
            
        </ImageBackground>
    
    );
}
function MapScreen() {
    return (

        <WebView
            source={{ uri: webmap }}
        />
    );
}
function AddDataScreen() {
    return (

        <WebView
            source={{ uri: forminput }}
        />
    );
}
function ListDataScreen() {
    return (
        <View>
            <List />
        </View>
    );
}
function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}



function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}  >
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Map" component={MapScreen}
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="map-marker-alt" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Add Data" component={AddDataScreen}
                    options={{
                        tabBarLabel: 'Add Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="plus-circle" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="List Data" component={ListDataScreen}
                    options={{
                        tabBarLabel: 'List Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="list" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="user" color={color} size={size} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    listitems: {
        textAlign: 'center',
        fontSize: '50'
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: Colors.pastel6, 
        textAlign: 'center',
        marginTop: 25,
    },
    text: {
        textAlign: 'center', 
        fontSize: 22, 
        color: Colors.pastel7, 
        fontWeight: 'bold',
        fontFamily: 'system'
    },
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: '#EEF5FF',
        padding: 20,
    },
    textcontainer: {
        color: Colors.pastel7
    }

})