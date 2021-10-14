import React,{useEffect,useState} from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import STYLES from '../../styles';

const drugs = () => {
    const[drugs,setDrugs] = useState([])
    useEffect(()=>{
        const allV = async()=>{
            const url = `http://192.168.8.100:5000/user/drugs`;
            const token = await AsyncStorage.getItem('drugs');
            axios.get(url, { headers: {authorization: `Bearer ${token}`} })
            .then((result)=> {
                setDrugs(result.data)
                // console.log(drugs)
                console.log(result.data)
           })
         }
        allV()
    },[])
    return (
        <View >
            <Text style={{alignSelf:'center',fontSize:30,marginTop:40,fontWeight:'bold'}}>LIST OF DRUGS</Text>
            {drugs.map((drug,index)=>{
                return(
                    <Text style={STYLES.drugsText}  key={index}>{drug}</Text>
                )
            })}
        </View>
    )
}

export default drugs
