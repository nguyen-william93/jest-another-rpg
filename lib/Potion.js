class Potion {
    constructor(name) {
        this.type = ["strength", "agility", "health"],
        this.name = name || this.types[Math.floor(Math.random() * this.type.length)];

        if (this.name === "health"){
            this.value = Math.floor(Math.random() * 10 + 30);
        } else {
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }

};

module.exports = Potion;