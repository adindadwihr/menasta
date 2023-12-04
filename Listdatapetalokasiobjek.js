import React from 'react'
import { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { Linking } from 'react-native';

const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycby3KKVBxmyyIA0acIqFcBbV3BSR3-kesG52w5Kq5-kSM9Klq50plLdcEZ39DpuLOJzN/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }


    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <View>
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity
                                    accessibilityRole="button"
                                    onPress={() => {
                                        Linking.openURL(`google.navigation:q=${item.latitude}, ${item.longitude}`)
                                    }}
                                    style={styles.linkContainer}>
                                    <View style={styles.card}>
                                        <View>
                                            <Text style={styles.cardtitle}>{item.nama}</Text>
                                            <Text style={styles.wrappedText}>{item.deskripsi}</Text>
                                        </View>
                                        <View style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'flex-end'
                                        }}>
                                            <FontAwesome5 name="chevron-right" size={20} color="blue" />
                                        </View>

                                    </View>
                                    
                                </TouchableOpacity>
                            </View>

                        )}
                    />
                </View>
            )}
        </SafeAreaView>

    )
}

export default Callapi
const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        borderRadius: 100,
        width: 80,
    },
    cardtitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    wrappedText: {
        fontSize: 14,
        flexWrap: 'wrap',
        width: 200,
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7
    },
    form: {
        paddingHorizontal: 150,
        paddingVertical: 10,
    }
})