import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Digimon from './digimon'
import Context from '../../context/context';

export default class index extends Component {

    static contextType = Context;

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({item}) {
        return <Digimon digimon={item} />
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