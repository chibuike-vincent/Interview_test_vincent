
import React,{useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/routers';
const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[message,setMessage]=useState('')

  const signIn = async ()=>{
    if(username =='' ||password=='' ){
      setMessage('')
      return setMessage('all fields are required') 
  }
  try {
  const userLogin = await axios.post("http://192.168.8.100:5000/user/signin",{username,password})
  const {error,savedUser,token} = userLogin.data;
  if(savedUser){
    
    await AsyncStorage.setItem('drugs',token)
    // console.log(savedUser)
    // console.log(token)
    Alert.alert('login successful')
   navigation.dispatch(StackActions.replace('Drugs'))
    setPassword('')
    setUsername('')
  }else{
    Alert.alert('invalid username or password')
    setUsername('')
    setPassword('')
  }

  } catch (error) {
    console.log(error)
  }
  }
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            DRUGS
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}>
            HUB
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: COLORS.light}}>
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
             placeholder="username"
              style={STYLES.input} 
              onChangeText={(text) => setUsername(text)}
              defaultValue={username}
              />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              defaultValue={password}
            />
          </View>
          <TouchableOpacity onPress={()=>signIn()} style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign In
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold', fontSize:18, paddingLeft:5}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold',fontSize:18, paddingLeft:5}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
