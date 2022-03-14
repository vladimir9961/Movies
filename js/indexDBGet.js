import createCardElement from './createCard.js';
const dbName = 'moviesDB';
const isExisting = (await window.indexedDB.databases()).map(db => db.name).includes(dbName);
if (isExisting === true) {
    var conection = window.indexedDB.open(dbName)

    conection.onsuccess = (e) => {
        var database = e.target.result;
        var dataBaseNames = database.objectStoreNames

        for (let i = 0; i < dataBaseNames.length; i++) {
            var transaction = database.transaction([dataBaseNames[i]])
            var objectStore = transaction.objectStore(dataBaseNames[i]);
            var request = objectStore.getAll();
            request.onsuccess = (e) => {
                createCardElement(e.target.result, dataBaseNames[i])
            }
        }

    }
}
export default isExisting