import React from 'react';

export default React.createContext({
  digimons: [],
  addDigimon : (digimon) => {},
  setDigimons : (digimons) => {},
  deleteDigimon : (digimonId) => {}
});