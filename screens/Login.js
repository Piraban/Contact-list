import React, { Component } from "react";
import styles from "../assets/styles/style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, navigate,Button} from 'react-native';


export default class Login extends Component {


  render() {
    const {navigate} =this.props.navigation;

    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>TigerSpike</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={this.onLoginPress}
              title="Login"
            />

          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }



  onLoginPress= () => {
    alert(" Success Login ");
    this.props.navigation.navigate('App');
    
  }

}
