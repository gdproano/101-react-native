import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Digimon from './digimon'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(digimon) {
        return <Digimon digimon={digimon} />
    }

    render() {
        const {digimons} = this.props;
        return (
            <FlatList
            data={digimons}
            renderItem={this.renderItem}
            keyExtractor={item => item.name}
          />
        )
    }
}