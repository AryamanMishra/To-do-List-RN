import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Alert = ({show,msg,type,showAlert})=> {

	useEffect(()=> {
		const timeout = setTimeout(()=> {
			showAlert()
		},1800)
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
        top:55,
        left:80,
        width:'62%',
        backgroundColor:'rgb(10,80,20)',
        borderRadius:20,
        marginBottom:40
    },
    'alert-danger': {
        position:'relative',
        top:55,
        left:80,
        width:'62%',
        backgroundColor:'#ae2012',
        borderRadius:20,
        marginBottom:40
    },
    text: {
        fontSize:12,
        textAlign:'center',
        paddingVertical:10,
        color:'white',
        letterSpacing:2,
        textTransform:'capitalize'
    }
})

export default Alert
