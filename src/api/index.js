import {DIGIMON_URL} from './urls';

async function getDigimon(onSuccessCallback, onErrorCallback) {
    fetch(DIGIMON_URL)
    .then(response => response.json())
    .then(onSuccessCallback)
    .catch(onErrorCallback);
}

export { getDigimon }