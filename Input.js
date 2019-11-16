import React, { Component } from 'react';
import { Animated, Text, TextInput, View, StyleSheet } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    }
  }

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.focus || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }

  handleFocus = () => this.setState({ focus: true });
  handleBlur = () => this.setState({ focus: false });
  
  render() {
    const { label, ...props } = this.props;
    const { focus } = this.state;
    const labelStyle2 = {
      position: 'absolute',
      left: 45,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [25, 10],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
      }),
      marginBottom: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 5],
      }),
      backgroundColor: '#f5f5f5',
      zIndex: 1,
      paddingHorizontal: 5,
    };

    const inputStyle = {
      marginTop: -20,
      height: 40,
      fontSize: 15,
      color: '#000',
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 5,
      borderColor: (focus || this.props.value) ? 'blue' : '#555'
    };

    return (
      <View style={styles.container}>
        <Animated.Text style={labelStyle2}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={inputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
          secureTextEntry={label === 'Senha' ? true : false }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 40,
    marginTop: 15,
  },

});
