import Component from './Component.js';

class CharacterItem extends Component {

    renderTemplate() {

        return /*html*/`
            <li class="character-item">
                <h1>Bender</h1>
                <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="bender">
                <blockquote>
                    Bite my shiny metal ass.
                </blockquote>
            </li>
        `;
    }
}
export default CharacterItem;