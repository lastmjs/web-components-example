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
        this.text = 'Check it out';
    }

    attached() {}
    detached() {}
    attributeChanged() {}
}

Polymer(AppComponent);
