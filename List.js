import React from 'react'
import { StyleSheet, Text, View,Pressable,FlatList,ScrollView } from 'react-native';
import RemoveItemIcon from 'react-native-vector-icons/Entypo';
import EditItemIcon from 'react-native-vector-icons/AntDesign';


const List = ({ list,clearList,editItem,removeItem })=> {

    return (
        <View style={styles.list}>
            <FlatList 
                // contentContainerStyle={{
                //     flexGrow: 1,
                // }}
                data={list}
                renderItem={({item}) => {
                    return (
                        <View key={item.id} style={styles.item}>  
                                <Text style={styles.itemValue}>{item.name}</Text>
                                <View style={styles.btnContainer}>
                                    <RemoveItemIcon
                                        size={24}
                                        name="squared-cross"
                                        style={styles.removeItemButton}
                                        onPress={()=>removeItem(item.id)}
                                    >
                                    </RemoveItemIcon>
                                    <EditItemIcon
                                        size={23}
                                        name='edit'
                                        style={styles.editItemButton} 
                                        onPress={()=>editItem(item.id)}   
                                    >
                                    </EditItemIcon>
                                </View>
                            </View>
                    )
                }}
            />
            <Pressable onPress={clearList} style={styles.clearAllbtn}>
                    <Text style={styles.clearAllbtnText}>Clear All</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        flex:0.65,
        marginHorizontal:'7.5%',
        width:350,
        height:'auto',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:80,

    },
	clearAllbtn:{
        marginBottom:5,
        marginTop:30,
		width:100,
		backgroundColor:'rgb(10,100,200)',
		borderRadius:20
	},
	clearAllbtnText :{
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
        borderColor: 'rgba(158, 150, 150, .35)',
        width:320,
        marginBottom:20
    },
    itemValue: {
        width:200,
        fontSize:20,
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