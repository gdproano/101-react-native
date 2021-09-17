import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
          message: 'this is the value',
        } // this is our initial data
      }

      static getDerivedStateFromProps(props, state) {
        const {counter} = props;
        return {
            message: `the updated value is: ${counter}`,
        }
      }

    render() {
        const {message} = this.state;
        const {onPress} = this.props;

        return (
            <View>
                <Text>{message}</Text>
                <Button onPress={onPress} title="Press me"/>
            </View>
        )
    }
}
