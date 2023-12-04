import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Button, Alert } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

const Getdata = () => {
    const jsonUrl = 'http://10.0.2.2:3000/mahasiswa';
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

    function deleteData(id) {
        fetch(jsonUrl + '/' + id, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                alert('Data terhapus');
                refreshPage();
            })
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
                                <View style={styles.card}>
                                    <View style={styles.avatar}>
                                        <FontAwesome5 name={item.icon} size={50} color={item.color} />
                                    </View>
                                    <View>
                                        <Text style={styles.cardtitle}>{item.nama}</Text>
                                        <Text>{item.nim}</Text>
                                        <Text>{item.kelas}</Text>
                                        <Text>{item.jeniskelamin}</Text>
                                    </View>
                                </View>
                                <View style={styles.form}>
                                    <Button title="Hapus"
                                        onPress={() => Alert.alert('Hapus data', 'Yakin akan menghapus data ini?', [
                                            { text: 'Tidak', onPress: () => console.log('button tidak') },
                                            { text: 'Ya', onPress: () => deleteData(item.id) },
                                        ])}
                                        color={'red'}
                                    />
                                </View>
                            </View>
                        )}
                    />
                </View>
            )}
        </SafeAreaView>
    )
}



export default Getdata

const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    form: {
        paddingHorizontal: 150,
        marginBottom: 0,
    },
    avatar: {
        width: 75,
    },
    cardtitle: {
        fontSize: 13.5,
        fontWeight: 'bold',
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
})