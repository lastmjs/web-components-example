class TextComponent {
    public is;
    public properties;

    public text;

    beforeRegister() {
        this.is = 'jl-text';
        this.properties = {
        };
    }

    mapStateToThis(e) {
        const state = e.detail.state;

        this.text = state.text;
    }

    ready() {}
    attached() {}
    detached() {}
    attributeChanged() {}
}

Polymer(TextComponent);
