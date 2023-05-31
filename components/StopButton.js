import * as React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class StopButton extends React.PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Icon name={'chevron-back-circle-sharp'} size={30} color={"#fff"} />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: "#4481FC",
  },
});

export default StopButton;