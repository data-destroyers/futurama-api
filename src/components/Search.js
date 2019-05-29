import Component from './Component.js';

class Search extends Component {
    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');
        
        form.addEventListener('submit', event => {
            event.preventDefault();
            const searchParams = new URLSearchParams();
            searchParams.set('search', input.value);
            window.location.hash = searchParams.toString(); 
        });

        function setHash() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');
            input.value = search;
        }

        setHash();

        window.addEventListener('hashchange', () => {
            setHash();
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <input>
                <button>🔎</button>
            </form>
        `;
    }
}

export default Search;