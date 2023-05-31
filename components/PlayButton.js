import * as React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class PlayButton extends React.PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Icon name={'caret-forward-outline'} size={30} color={Colors.white} />
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
    backgroundColor: "#4481FC"
  },
});
const Colors = {
  background: '#1E1E1E',
  black: '#000000',
  white: '#ffffff',
  lightGray: '#ccc',
  primary: '#4481FC',
  danger: '#F5365C',
};

;

export default PlayButton;
