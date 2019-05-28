import Component from './Component.js';
import Header from './Header.js';
import futuramaApi from '../services/futurama-api.js';
import CharacterList from './CharacterList.js';
import characters from '../../test/characters.js';

class App extends Component { 

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const characterList = new CharacterList({ characters });
        main.appendChild(characterList.render());

        futuramaApi.getCharacters()
            .then(characters => console.log(characters));

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <div>

            <main>

            </main>
        </div>
        `;
    }   
}

export default App;