import Component from './Component.js';

class CharacterList extends Component {
    render() {
        const list = this.renderDOM();
        return list;
    }
    
    renderTemplate() {
        return /*html*/ `
        <ul class="character-list">
            <li class="character-item">
                <h1>Bender</h1>
                <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="bender">
                <blockquote>
                    Bite my shiny metal ass.
                </blockquote>
            </li>
            <li class="character-item">
                <h1>Leela</h1>
                <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/leela.png">
                <blockquote>
                    ...at least here you'll be treated with dignity. Now strip naked and get on\nthe probulator.
                </blockquote>
            </li>
            <li class="character-item">
                <h1>Fry</h1>
                <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png">
                <blockquote>
                    ...it's what seperates humans and robots from animals and animal robots.
                </blockquote>
            </li>
        </ul>
        `;
    }
}


export default CharacterList;