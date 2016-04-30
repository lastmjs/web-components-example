class AppComponent {
    public is;
    public properties;

    beforeRegister() {
        this.is = 'jl-app';
        this.properties = {
        };
    }

    ready() {}
    attached() {}
    detached() {}
    attributeChanged() {}
}

Polymer(AppComponent);
