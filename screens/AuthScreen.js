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
    userEmail: '',
    userHash: ''
  };

  /*TODO: Add error handling*/
  authenticate = async (reqBody) => {
    const {navigate} = this.props.navigation;

    const requestBody = {
      query: `
        ${reqBody}
      `
    }
    
   const response = await fetch('http://192.168.0.101:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json();
    const {data} = json;

    console.log('hehehehee', data)

    if (data.login.token) {
      console.log('INSIDEHERE')
      navigate('Home');
    }
  }

  render() {
    const {userEmail, userHash} = this.state;
    
    const loginQuery = `query {
      login(email: "${userEmail}", password: "${userHash}") {
        userId
        token
        tokenExpiration
      }
    }`; 

    const signUpQuery = `mutation {
      createUser(userInput: {email: "${userEmail}", password: "${userHash}"}) {
        _id
        email
      }
    }`;

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
        <Button title="Sign In" onPress={() => this.authenticate(loginQuery)}></Button>
        <Button title="Sign Up" onPress={() => this.authenticate(signUpQuery)}></Button>
      </View>
    );
  }
}
