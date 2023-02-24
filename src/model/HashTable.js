export default class HashTable {
    constructor(size) {
        this.data = size <= 0 ? [] : new Array(size);
        this.size = size;
        this.lastHash = null;
    }

    _generateHash(key) {
        let intHash = 0;
        for (let charIndex = 0; charIndex < key.length; charIndex++) {
            intHash =
                (intHash + key.charCodeAt(charIndex) * charIndex) % this.size;
        }
        this.lastHash = intHash;
        return intHash;
    }

    set(key, value) {
        const hashedIndex = this._generateHash(key);
        this.data[hashedIndex] = value;
    }

    get(key) {
        return this.data[key];
    }
}
