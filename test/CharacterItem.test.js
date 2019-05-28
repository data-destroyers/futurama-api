import CharacterItem from '../src/components/CharacterItem.js';

const test = QUnit.test; 
QUnit.module('create character item');
    
test('create character item DOM', assert => {
    //arrange
    const character = {
        character: 'Bender',
        quote: 'Bite my shiny metal ass.',
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
    };
    
    //act
    const characterItem = new CharacterItem({ character });
    const rendered = characterItem.renderTemplate();


    //assert
    assert.htmlEqual(rendered, /*html*/`
            <li class="character-item">
                <h1>Bender</h1>
                <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="Bender">
                <blockquote>
                    Bite my shiny metal ass.
                </blockquote>
            </li>
    `);

});

