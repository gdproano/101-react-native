import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { getDigimon } from '../../api'
import Digimons from '../digimons';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'this is the value',
            error: 'No error',
            data: []
        } // this is our initial data
    }

    static getDerivedStateFromProps(props, state) {
        const { counter } = props;
        console.log('state ', state);
        return {
            message: `the updated value is: ${counter}`,
        }
    }

    async componentDidMount() {
        getDigimon(data => {
            this.setState({ data});
        }, () => {
            this.setState({error: 'data retrieving error'});
        });
    }

    render() {
        const { error, message, data } = this.state;
        const { onPress } = this.props;

        return (
            <View>
                <Text>{message}</Text>
                <Text>{error}</Text>
                <Text>{message}</Text>
                <Button onPress={onPress} title="Press me" />
                <Digimons digimons={data} />
            </View>
        )
    }
}
