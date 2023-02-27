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
        const newEntry = {};
        newEntry[key] = value;
        if (!this.data[hashedIndex]) {
            this.data[hashedIndex] = [newEntry];
        } else {
            // collision
            this.data[hashedIndex].push(newEntry);
        }
    }

    get(key) {
        const hashedIndex = this._generateHash(key);
        const entries = this.data[hashedIndex];
        if (entries.length === 1) {
            return entries[0][key];
        } else {
            for (let keyEntries in entries) {
                if (keyEntries === key) {
                    return entries[keyEntries];
                }
            }
        }
    }
}
