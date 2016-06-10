import {RootReducer} from '../../redux/root-reducer.ts';

class AppComponent {
    public is;
    public properties;

    public text;

    beforeRegister() {
        this.is = 'jl-app';
        this.properties = {
        };
    }

    ready() {
        this.rootReducer = RootReducer;
    }

    changeText() {
        this.action = {
            type: 'CHANGE_TEXT',
            text: 'hello'
        };
    }

    attached() {}
    detached() {}
    attributeChanged() {}
}

Polymer(AppComponent);
