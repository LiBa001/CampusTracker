import * as idb from "idb";

function createDB() {
    return idb.openDB('rooms', 1, {
        upgrade(upgradeDB) {
            upgradeDB.createObjectStore('rooms', {keyPath: 'url'});
        }
    });
}

export const roomsDb = {
    db: createDB(),
    getAll(storeName) {
        return this.db.then(db => {
            return db.getAll(storeName);
        })
    },
    insert(storeName, objects) {
        return this.db.then(db => {
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            return Promise.all(objects.map(obj => store.put(obj)))
                .catch(() => {
                    tx.abort();
                    throw 'Failed inserting objects into rooms idb';
                });
        })
    },
    // rooms
    getRooms() {
        return this.getAll('rooms');
    },
    insertRooms(rooms) {
        return this.insert('rooms', rooms);
    },
    getRoom(url) {
        return this.get('rooms', url);
    },
    putRoom(room) {
        return this.db.then(db => {
            return db.put('rooms', room);
        })
    },

}
