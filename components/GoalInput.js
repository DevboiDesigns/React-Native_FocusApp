import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

function GoalInput(props) {
  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/target.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={props.goalInputHandler}
          value={props.enteredGoalText}
        />
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={props.addGoalHandler}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.hideModal} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: '#5e0acc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8,
    borderRadius: 8,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
});
