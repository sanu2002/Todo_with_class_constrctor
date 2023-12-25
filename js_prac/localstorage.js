class LocalStorage {
    constructor(key, value) {
        this.storage = { [key]: value };
    }

    setStorage(key, value) {
        this.storage[key] = value;
    }

    getStorage() {
        return this.storage;
    }
}

const item1 = new LocalStorage(1, 'sanu');
item1.setStorage(2, 'salu');
item1.setStorage(3, 'maa');
item1.setStorage(4, 'sibani');
item1.setStorage(5, 'sima');
item1.setStorage(6, 'bapa');

console.log(item1.getStorage());


const mappedvalues=Object.values(item1.getStorage()).map(value=>value.toUpperCase())
const filteredValues = Object.values(item1.getStorage()).filter(value => value.startsWith('l'));

console.log(mappedvalues)
console.log(filteredValues)

