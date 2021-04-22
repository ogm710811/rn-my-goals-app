import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const GoalItem = ( { itemData, onDeleteItem } ) => {
  return (
    <TouchableOpacity
      style={ styles.listItem }
      onPress={ () => onDeleteItem( itemData.item.id ) }
    >
      <Text>{ itemData.item.value }</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create( {
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1
  }
} );

export default GoalItem;
