import Component from './Component.js';

class Loading extends Component {
    renderTemplate() {
        return /*html*/`
            <div class="loading">
                <img class="loading-gif" src="../../assets/loading.gif">
            </div>
        `;
    }
}

export default Loading;