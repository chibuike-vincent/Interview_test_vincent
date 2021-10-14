
import React,{useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';

const SignUpScreen = ({navigation}) => {

  
  // ========STATES======/////
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[message,setMessage]=useState('')

  const signUp = async ()=>{
    if(name=='' || username =='' ||password=='' ){
      setMessage('')
      return setMessage('all fields are required') 

  }
  try {
  const userSignup = await axios.post("http://192.168.8.100:5000/user/signup",{name,username,password})
  if(userSignup){
    console.log(userSignup.data)
    setName('')
    setUsername('')
    setPassword('')
   return Alert.alert('registration successful')
  }else{
    return Alert.alert('registration not successful')
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
            DRUG
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}>
            HUB
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          
          <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.light}}>
            Sign up
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
             placeholder="Name" 
             style={STYLES.input}
             onChangeText={(text) => setName(text)}
             defaultValue={name}
             />
          </View>
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
          <View><Text style={STYLES.message}>{message}</Text></View>
          <TouchableOpacity onPress={()=>signUp()} style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            
            <View style={{width: 10}}></View>
           
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold', fontSize:18}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold', fontSize:18, paddingLeft:5}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
