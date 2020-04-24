import React from 'react';
import {View, Keyboard, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Graph extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            total: 0,
            death: 0,
            recovered: 0,
            lastUpdate: '',
            showResult: false
        }
    }

    async fetchDataFromAPI(){
        const response = await fetch(`https://covid19.mathdro.id/api/countries/${this.state.query}`)

        const data = await response.json();

        console.log(data);

        let total = data.confirmed.value;
        let death = data.deaths.value;
        let recovered = data.recovered.value;
        let lastUpdate = data.lastUpdate.slice(0,10).split('-').reverse().toString().replace(/,/g,'-');

        console.log(lastUpdate);

        this.setState({
            total: total,
            death: death,
            recovered: recovered,
            lastUpdate: lastUpdate
        })
    }

    showQuerySearchResult(){
        if(this.state.showResult === true){
            return(
                <View style={styles.box2Container}>
                    <Text style={styles.countryName}>COUNTRY NAME </Text>
                    <Text style={{fontSize: 30, color: '#f2a723', position: 'absolute', top: 40}}>{this.state.query.toUpperCase()}</Text>
                    <Text style={styles.totalCase}>TOTAL CASES </Text>
                    <Text style={{fontSize: 30, color: '#f2a723', position: 'absolute', top: 130}}>{this.state.total}</Text>
                    <Text style={styles.deathCases}>DEATH</Text>
                    <Text style={{fontSize: 30, color: '#f2a723', position: 'absolute', top: 220}}>{this.state.death}</Text>
                    <Text style={styles.recoveredCases}>RECOVERED</Text>
                    <Text style={{fontSize: 30, color: '#f2a723', position: 'absolute', top: 310}}>{this.state.recovered}</Text>
                    <Text style={styles.lastUpdate}>LAST UPDATE</Text>
                    <Text style={{fontSize: 30, color: '#f2a723', position: 'absolute', top: 400}}>{this.state.lastUpdate}</Text>
                </View>
            )
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Text style={styles.searchText}>Enter your country's name to check the total patients, including death and recovered cases</Text>
                    <TextInput
                        style={styles.textInput}
                        clearTextOnFocus={true}
                        onChangeText={(text) => {
                            let result = text.toLowerCase();
                            if(text !== ''){
                                this.setState({
                                    query: result
                                })
                            }
                        }}
                        onFocus={() => {
                            this.setState({
                                showResult: false
                            })
                        }}
                    >
                    </TextInput>
                    <TouchableOpacity
                        style={styles.buttonSubmit}
                        onPress={
                            async () => {
                                Keyboard.dismiss();
                                await this.fetchDataFromAPI();
                                this.setState({
                                    showResult: true
                                })
                            }
                        }
                    >
                        <Text style={styles.buttonText}>ENTER</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box2}>
                    {this.showQuerySearchResult()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    box1: {
        flex: 2,
        width: '100%',
        marginTop: 35,
        alignItems: 'center'
    },
    searchText: {
        fontSize: 18,
        color: '#1d1d1d',
        textAlign: 'center'
    }, 
    textInput: {
        width: '100%',
        height: 50,
        borderWidth: 3,
        borderColor: '#1d1d1d',
        marginTop: 20,
        fontSize: 18,
        paddingLeft: 15
    },
    buttonSubmit: {
        width: 100,
        height: 50,
        backgroundColor: '#1d1d1d',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#f0f0f0'
    },
    box2: {
        flex: 6,
        marginTop: 50
    },
    box2Container: {
        width: '100%',
        alignItems: 'center'
    },
    countryName: {
        fontSize: 30,
        color: '#1d1d1d',
    },
    totalCase: {
        fontSize: 30,
        color: '#1d1d1d',
        position: 'absolute',
        top: 90,
        left: 30
    },
    deathCases: {
        fontSize: 30,
        color: '#1d1d1d',
        position: 'absolute',
        top: 180,
        left: 70
    },
    recoveredCases: {
        fontSize: 30,
        color: '#1d1d1d',
        position: 'absolute',
        top: 270,
        left: 40
    },
    lastUpdate: {
        fontSize: 30,
        color: '#1d1d1d',
        position: 'absolute',
        top: 360,
        left: 30
    }
})