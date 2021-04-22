import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [ personalGoals, setPersonalGoals ] = useState( [] );
  const [ isAddGoalMode, setIsAddGoalMode ] = useState( false );

  const addGoalHandler = ( enteredGoal ) => {
    setIsAddGoalMode( false );
    setPersonalGoals( currentState => [
      ...currentState,
      { id: Math.random().toString(), value: enteredGoal } ] );
  };

  const deleteGoalHandler = ( goalId ) => {
    setPersonalGoals( currentState => {
      return currentState.filter( g => g.id !== goalId );
    } );
  };

  const cancelModalHandler = () => {
    setIsAddGoalMode( false );
  }

  return (
    <View style={ styles.container }>
      <Button
        color='#f194ff'
        title='Add Goal'
        onPress={ () => setIsAddGoalMode( true ) }
      />
      <GoalInput
        isModalVisible={ isAddGoalMode }
        onAddGoal={ addGoalHandler }
        onCancelModal={ cancelModalHandler }
      />
      <FlatList
        data={ personalGoals }
        keyExtractor={ ( item ) => item.id }
        renderItem={ itemData => (
          <GoalItem
            itemData={ itemData }
            onDeleteItem={ deleteGoalHandler }
          />
        ) }
      />
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    paddingHorizontal: 30,
    paddingVertical: 50
  }
} );

