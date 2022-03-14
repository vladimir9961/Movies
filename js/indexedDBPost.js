//>>>>>>>INEXEDDB<<<<<<<<<<<<<<<<<
//>>>>>>>Saving in indexeddb playlist of each categorie
function init(param, param1) {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open('moviesDB', 1);

    if (db === null) {
        DBOpenReq.addEventListener('error', (err) => {
            //Error occurred while trying to open DB
            console.warn(err);
        });
        DBOpenReq.addEventListener('success', (ev) => {
            //DB has been opened... after upgradeneeded
            db = ev.target.result;
            // console.log('success', db);
        });
        DBOpenReq.addEventListener('upgradeneeded', (ev) => {
            //first time opening this DB
            //OR a new version was passed into open()
            db = ev.target.result;
            let oldVersion = ev.oldVersion;
            let newVersion = ev.newVersion || db.version;
            console.log('DB updated from version', oldVersion, 'to', newVersion);

            console.log('upgrade', db);
            if (!db.objectStoreNames.contains("ComingSoon")) {
                objectStore = db.createObjectStore("ComingSoon", {
                    keyPath: 'id',
                    autoIncrement: true
                });
                objectStore = db.createObjectStore("MostPopularMovies", {
                    keyPath: 'id',
                    autoIncrement: true
                });
                objectStore = db.createObjectStore("InTheaters", {
                    keyPath: 'id',
                    autoIncrement: true
                });
                objectStore = db.createObjectStore("Top250Movies", {
                    keyPath: 'id',
                    autoIncrement: true
                });
                objectStore = db.createObjectStore("TopTvs", {
                    keyPath: 'id',
                    autoIncrement: true
                });
            }
        });
        //console.log(ExportdataComingSoon)
        let n = 8;
        let data = param.items.slice(0, n)
        data.forEach((dataInsert) => {
            setTimeout(function (ev) {
                let tx = makeTX(param1, 'readwrite');
                tx.oncomplete = (ev) => {

                };
                let store = tx.objectStore(param1);
                let request = store.put(dataInsert);

                request.onsuccess = (ev) => {
                };
                request.onerror = (err) => {
                };
            }, 3000)
        });
        function makeTX(storeName, mode) {
            let tx = db.transaction(storeName, mode);
            tx.onerror = (err) => {
                console.warn(err);
            };
            return tx;
        };
    }
    else {

    }
};
export default init
