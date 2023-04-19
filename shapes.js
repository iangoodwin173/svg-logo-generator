class Shapes {
    constructor() {
        this.color = '';
    }

    setColor(varColor) {
        this.color = colorVar;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="125" cy="125" r="75" />`;
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="75" y="150" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = {Circle, Triangle, Square};