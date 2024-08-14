/** shopping cart item and associated static methods*/
const items = require("./fakeDb")

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        //keeps track of items
        items.push(this);
    }

    static findAll() {
        return items
    }

    //update an existing item with name and price

    static update(name, data) {
        let foundItem = Item.find(name);
        if (foundItem === undefined) {
            throw { message: "Item not found", status: 404}
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    //find and return an item name
    static find(name) {
        let foundItem = items.find(v => v.name === name);
        if(foundItem === undefined) {
            throw { message: "Item not found", status: 404}
        }
        return foundItem;
    }

    //remove an item with a matching index
    static remove(name) {
        let foundIdx = items.findIndex(v => v.name === name);
        if (foundIdx === -1) {
            throw { message: "Item not found", status: 404}
        }
        items.splice(foundIdx, 1);
    }
}

module.exports = Item;