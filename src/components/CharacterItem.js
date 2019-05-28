import Component from './Component.js';

class CharacterItem extends Component {

    renderTemplate() {
        const character = this.props.character;

        return /*html*/`
            <li class="character-item">
                <h1>${character.character}</h1>
                <img src="${character.image}" alt="${character.character}">
                <blockquote>
                    ${character.quote}
                </blockquote>
            </li>
        `;
    }
}
export default CharacterItem;