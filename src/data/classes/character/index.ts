export class Character {
    name: string = "";
    level: number = 0;
    rarity: number = 0;
    constellation: number = 0;
    element: string = "";

    get ascension() {
        if (this.level < 10) return 0;
        if (this.level < 20) return 1;
        if (this.level < 30) return 2;
        if (this.level < 40) return 3;
        if (this.level < 50) return 4;
    }

    constructor(
        name: string,
        rarity: number,
        element: string,
        level: number = 0,
        constellation: number = 0
    ) {
        this.name = name;
        this.rarity = rarity;
        this.level = level;
        this.element = element;
        this.constellation = constellation;
    }
}
