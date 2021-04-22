import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ( { isModalVisible, onAddGoal, onCancelModal } ) => {
  const [ enteredGoal, setEnteredGoal ] = useState( '' );

  const addGoalHandler = () => {
    onAddGoal( enteredGoal );
    setEnteredGoal( '' );
  };

  return (
    <Modal
      visible={ isModalVisible }
      animationType='slide'
    >
      <View style={ styles.inputContainer }>
        <TextInput
          style={ styles.textInput }
          placeholder='Enter Goal'
          value={ enteredGoal }
          onChangeText={ setEnteredGoal }
        />
        <View style={ styles.buttonsContainer }>
          <View style={ styles.button }>
            <Button
              color='red'
              title='  Cancel  '
              onPress={ onCancelModal }
            />
          </View>
          <View style={ styles.button }>
            <Button
              color='green'
              title='  Save  '
              onPress={ addGoalHandler }
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create( {
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginEnd: 10,
    marginVertical: 10
  },
  buttonsContainer: {
    marginVertical: 5,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: '40%'
  }
} );

export default GoalInput;
