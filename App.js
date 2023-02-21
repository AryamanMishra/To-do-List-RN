import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,ScrollView,Pressable } from 'react-native';
import List from './List';


const App = ()=> {

	const [item,setItem] = useState('')
	const [list,setList] = useState([])

	const handleSubmit = ()=> {
		const name = item
		const id = new Date().getTime().toString()
		const newItem = {id,name}
		setList([...list,newItem])
		setItem('')
	}

	const clearList = ()=> {
		setList([])
	}

	const removeItem = (id)=> {
		const newList = list.filter((item) => item.id !== id)
		setList(newList)
	}


	const editItem = (id)=> {
		setItem(id)
	}

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.title}>To-do list</Text>
				<TextInput 
					style={styles.input}
					value={item}
					onChangeText={(item)=>setItem(item)}
					placeholder='Add Task'
				/>
				<Pressable 
					onPress={handleSubmit}
					style={styles.btn}
				>
					<Text style={styles.btnText}>Add</Text>
				</Pressable>
				<StatusBar style="auto" />
				{
					list.length !== 0 && <List 
											list={list} 
											clearList={clearList} editItem={editItem} removeItem={removeItem}
											/>
				}
			</View>
			
		</>
	);
}

const styles = StyleSheet.create({
	container :{
		flex:0.65,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#fff',
	},
	title :{
		fontSize:35,
		// fontFamily:'Arial'
	},
	input: {
		fontSize:20,
		marginTop:50
	},
	btn:{
		width:85,
		backgroundColor:'rgb(10,100,200)',
		marginTop:30,
		borderRadius:20
	},
	btnText :{
		textAlign:'center',
		color:'white',
		fontSize:17,
		paddingVertical:9,
		paddingHorizontal:9
	}
});

export default App;