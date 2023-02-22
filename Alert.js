import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Alert = ({show,msg,type,showAlert})=> {

	useEffect(()=> {
		const timeout = setTimeout(()=> {
			showAlert()
		},2000)
		return ()=> {
			clearTimeout(timeout)
		}
	},[show,msg,type,showAlert])

	
	return (
		<View style={styles[`alert-${type}`]}>
            <Text style={styles.text}>{msg}</Text>
        </View>
	)
}


const styles = StyleSheet.create({
    'alert-success': {
        position:'relative',
        top:47,
        left:75,
        width:'65%',
        backgroundColor:'rgb(0,40,10)',
        borderRadius:20,
    },
    'alert-danger': {
        position:'relative',
        top:50,
        left:75,
        width:'65%',
        backgroundColor:'#ae2012',
        borderRadius:20
    },
    text: {
        fontSize:12,
        textAlign:'center',
        paddingVertical:12,
        color:'white',
        letterSpacing:2,
        textTransform:'capitalize'
    }
})

export default Alert
