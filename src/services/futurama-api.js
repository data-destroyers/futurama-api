const URL = 'http://futuramaapi.herokuapp.com/api/quotes';

const futuramaApi = {
    getCharacters() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default futuramaApi;