import React from 'react'
import { StyleSheet, Text, View,Pressable } from 'react-native';
import RemoveItemIcon from 'react-native-vector-icons/Feather';
import EditItemIcon from 'react-native-vector-icons/FontAwesome';


const List = ({ list,clearList,editItem,removeItem })=> {
    return (
        <View style={styles.list}>
            {
                list.map((item)=> {
                    const {id,name} = item
                    return (
                        <View key={id} style={styles.item}>  
                            <Text style={styles.itemValue}>{name}</Text>
                            <View style={styles.btnContainer}>
                                <RemoveItemIcon
                                    size={23}
                                    name="trash-2"
                                    style={styles.removeItemButton}
                                    onPress={()=>removeItem(id)}
                                >
                                </RemoveItemIcon>
                                <EditItemIcon
                                    size={23}
                                    name='edit'
                                    style={styles.editItemButton} 
                                    onPress={()=>editItem(id)}   
                                >
                                </EditItemIcon>
                            </View>
                        </View>
                    )
                })
            }
            <Pressable onPress={clearList} style={styles.btn}>
				<Text style={styles.btnText}>Clear All</Text>
			</Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        position:'absolute',
        top:'82%',
        marginTop:35,
        marginHorizontal:30,
        width:400,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
	btn:{
		width:100,
		backgroundColor:'rgb(10,100,200)',
		marginTop:30,
		borderRadius:20
	},
	btnText :{
		textAlign:'center',
		color:'white',
		fontSize:15,
		paddingVertical:12,
		paddingHorizontal:15
	},
    item:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'grey',
        width:315,
        marginBottom:20
    },
    itemValue: {
        fontSize:22,
        paddingHorizontal:10,
        paddingVertical:7
    },
    btnContainer: {
        display:'flex',
        flexDirection:'row'
    },
    removeItemButton: {
        color:'rgb(180,0,0)',
        paddingVertical:10,
        paddingHorizontal:10
    },
    editItemButton: {
        color:'green',
        paddingVertical:10,
        paddingHorizontal:10
    }
});


export default List
