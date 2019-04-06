import React from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  AsyncStorage
} from 'react-native';

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    text: '',
    userEmail: '',
    userHash: ''
  };


  handleSignUp = () => {
    const {userEmail, userHash} = this.state;
    const requestBody = {
      query: `
        mutation {
          createUser(userInput: {email: "${userEmail}", password: "${userHash}"}) {
            _id
            email
          }
        }
      `
    }
    
   return fetch('http://10.11.90.212:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(resJson => console.log(resJson));
  }

  handleSignIn = () => {

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"  }}>
        <Text aria-label="Username">Username</Text>
        <TextInput
          style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={email => {
            this.setState({userEmail: email})
          }}
        />
        <Text aria-label="Password">Password</Text>
        <TextInput
          secureTextEntry={true}
          style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={hash => {
            this.setState({userHash: hash})
          }}
        />
        <Button title="Sign In" onPress={this.handleSignIn} type="submit"></Button>
        <Button title="Sign Up" onPress={this.handleSignUp} type="submit"></Button>
      </View>
    );
  }
}
