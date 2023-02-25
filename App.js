import React, {useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,ScrollView,Pressable } from 'react-native';
import List from './List';
import Alert from './Alert';
import AddItemButton from 'react-native-vector-icons/Entypo'
import UpdateItemButton from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';




const App = ()=> {


	const [item,setItem] = useState('')
	const [list,setList] = useState([])
	const [isEditing,setIsEditing] = useState(false)
	const [editID,setEditID] = useState(null)
	const [alert,setAlert] = useState({show:false,msg:'',type:''})


	const setData = async()=> {
		if (list.length === 0) {
			try {
				await AsyncStorage.setItem('@list', JSON.stringify([])).then((value)=> {
					// console.log(list)
				})
			} 
			catch (error) {
				// console.log('Error in saving empty array to async storage', error)
			}
		}
		else {
			try {
				await AsyncStorage.setItem('@list',JSON.stringify(list)).then((value)=> {
					// console.log(list)
				})
			} 
			catch (error) {
				// console.log('Error in saving list to storage', error)
			}
		}
	}


	const getData = async()=> {
		try {
			await AsyncStorage.getItem('@list').then((value)=> {
				if (value !== null) {
					setList(JSON.parse(value))
				}
				else {
					setList([])
				}
			})
			// console.log(list)
		}
		catch(err){
			// console.log('Error in getItem',err)
		}
	}

	useEffect(()=> {
		getData()
	},[])


	useEffect(()=> {
		setData()
	},[list])



	const showAlert = (show=false,msg='',type='')=> {
		setAlert({show,msg,type})
	}


	const handleSubmit = ()=> {
		if (!item) {
			showAlert(true,'please enter a value','danger')
		}
		else if (item && isEditing) {
			const newList = list.map((listItem)=> {
				if (listItem.id === editID) {
					return {...item,name:item}
				}
				return listItem
			})
			setList(newList)
			setItem('')
			setEditID(null)
			setIsEditing(false)
			showAlert(true,'task edited successfully','success')
		}
		else {
			const name = item
			const id = new Date().getTime().toString()
			const newItem = {id,name}
			setList([newItem,...list])
			showAlert(true,'task added to the list','success')
			setItem('')

		}
	}




	const clearList = ()=> {
		showAlert(true,'emptied list','danger')
		setList([])
	}

	const removeItem = (id)=> {
		showAlert(true,'task removed from the list','danger')
		const newList = list.filter((item) => item.id !== id)
		setList(newList)
	}


	const editItem = (id)=> {
		const specificItem = list.find((item)=> item.id === id)
		setIsEditing(true)
		setEditID(id)
		setItem(specificItem.name)
	}

	return (
		<>
			<StatusBar style="auto" />
			{alert.show && <Alert {...alert} showAlert={showAlert}/>}
			<View style={styles.container}>
			
				<Text style={styles.title}>To-do list</Text>
				<TextInput 
					style={styles.input}
					value={item}
					onChangeText={(item)=>setItem(item)}
					placeholder='Add Task'
				/>
				<Pressable
					style={({pressed}) => [
						{
							backgroundColor: pressed ? 'black' : '#5A40A3',
							width:36,
							marginTop:40,
							borderRadius:25,
							paddingVertical:3,
							paddingHorizontal:3.6
						},
        			]}
					onPress={handleSubmit}
				>
					{isEditing ? 
						<UpdateItemButton 
							name='update'
							size={29}
							color='white'
						/>:
						<AddItemButton 
							name='plus'
							size={29}
							color='white'
						/>
					}
					
				</Pressable>
				
				
			</View>
			{
					list.length !== 0 && <List 
											list={list} 
											clearList={clearList} editItem={editItem} removeItem={removeItem}
											setIsEditing={setIsEditing} isEditing={isEditing}
											/>
			}
		</>
	);
}

const styles = StyleSheet.create({
	container :{
		position:'relative',
		top:'8%',
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		marginBottom:50,
		marginTop:30
	},
	title :{
		fontSize:33,
	},
	input: {
		fontSize:18,
		marginTop:60,
		borderBottomColor:'rgba(158, 150, 150, .2)',
		borderBottomWidth:1,
		textDecorationStyle:'none'
	},
	// btn:{
	// 	width:90,
	// 	backgroundColor:'rgb(10,100,200)',
	// 	marginTop:25,
	// 	borderRadius:20,
	// },
	btnText :{
		textAlign:'center',
		color:'white',
		fontSize:15.5,
		paddingVertical:7.5,
		paddingHorizontal:9
	}
});

export default App;