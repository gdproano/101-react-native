import React from 'react';
import Context from './context';

export default class GlobalState extends React.Component{
state = {
  digimons: [],
}
 
addDigimon = (digimon) => {
  const list = [...this.state.digimons, digimon];
  this.setState({digimons: list});
};
 setDigimons = (digimons) => {
  this.setState({digimons});
};
 
deleteDigimon = (digimonId) => {
  this.setState(this.state.digimons.splice(digimonId,1));
};

render(){
 return (
  <Context.Provider 
   value={{
    digimons: this.state.digimons,
    addDigimon: this.addDigimon,
    deleteDigimon: this.deleteDigimon,
    setDigimons: this.setDigimons
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}