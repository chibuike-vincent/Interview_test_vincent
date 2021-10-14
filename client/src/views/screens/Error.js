import React from 'react'
import { View, Text } from 'react-native'
import STYLES from '../../styles';

const Error = ({error}) => {
    return (
        // {errors?<View><Text style={STYLES.message}>{errors}</Text></View>:null}
        <View>
            {error?<Text style={STYLES.message}>{error}</Text>:null}
        </View>
    )
}

export default Error
