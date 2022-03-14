import init from './indexedDBPost.js';
import createCardElement from './createCard.js';
import showDeatails from './showDetails.js';
import isExisting from './indexDBGet.js'
import coming from './showAll.js'
import createIframe from '../pages/treiler/js/iframe.js'


//FETCH KEY 
const key = "k_4igxn67a";

const url = window.location.href;
var urlcut = (url.split('?')[1]);

const URL_COMING_SOON = "ComingSoon";
const ULR_MOVIE = "Top250Movies";
const URL_TOP_TV = "Top250TVs";
const URL_MOST_POPULAR_MOVIES = "MostPopularMovies";
const URL_IN_THEATRES = "InTheaters";

//Export data for indexedDB
let ExportdataComingSoon = [{ name: "ComingSoon" }];
let ExportdataPopularMovie = [{ name: "MostPopularMovies" }];
let ExportdataTheatar = [{ name: "InTheaters" }];
let ExportdataMovie = [{ name: "Top250Movies" }];
let ExportdataTv = [{ name: "TopTvs" }];



//EXPORT ARRAY OBJECTS TO STORE IN INDEXEDDB POST TO CREATE BASE
export default { ExportdataComingSoon, ExportdataPopularMovie, ExportdataTheatar, ExportdataMovie, ExportdataTv }
document.cookie = 'cookie2=value2; SameSite=None; Secure';
//>>>>Cut empty spaces in variables for fetch api to search
let urlMovie = [ULR_MOVIE].map(function (item) {
    return item.replace(/\s+/g, '');
})
let urlComingSoon = [URL_COMING_SOON].map(function (item) {
    return item.replace(/\s+/g, '');
})
let urlTvs = [URL_TOP_TV].map(function (item) {
    return item.replace(/\s+/g, '');
})
let urlMostPopularMovies = [URL_MOST_POPULAR_MOVIES].map(function (item) {
    return item.replace(/\s+/g, '');
})
let urlInTheaters = [URL_IN_THEATRES].map(function (item) {
    return item.replace(/\s+/g, '');
})
//>>>>>>IF INDEXEDDB EXISTS FETCH WOULD NOT BE CALLED
if (isExisting === true) {

}// INDEXEDDB DOESENT EXIST FETCH IS CALLED
else {
    if (window.location.href.indexOf('/index.html') > -1) {
        async function fetchingData() {
            // >>>>>> Coming soon fetch
            await fetch(`https://imdb-api.com/en/API/${urlComingSoon}/${key}`)
                .then(response => response.json())
                .then(dataComingSoon => {

                    for (let i = 0; i < dataComingSoon.items.length; i++) {
                        let obj = {
                            id: dataComingSoon.items[i].id,
                            title: dataComingSoon.items[i].title,
                            image: dataComingSoon.items[i].image,
                            year: dataComingSoon.items[i].year
                        }
                        //console.log(obj)
                        ExportdataComingSoon.push(obj);
                    }
                    createCardElement(dataComingSoon.items, "Coming Soon");
                    init(dataComingSoon, "ComingSoon")

                });
            //>>>>>> Most popular movies fetch   
            await fetch(`https://imdb-api.com/en/API/${urlMostPopularMovies}/${key}`)
                .then(response => response.json())
                .then(dataPopularMovie => {
                    for (let i = 0; i < dataPopularMovie.items.length; i++) {
                        let obj = {
                            id: dataPopularMovie.items[i].id,
                            title: dataPopularMovie.items[i].title,
                            image: dataPopularMovie.items[i].image,
                            year: dataPopularMovie.items[i].year
                        }
                        //console.log(obj)
                        ExportdataPopularMovie.push(obj);
                    }
                    createCardElement(dataPopularMovie.items, "Most Popular Movies");
                    init(dataPopularMovie, "MostPopularMovies")
                });
            //>>>>>> In theaters fetch
            await fetch(`https://imdb-api.com/en/API/${urlInTheaters}/${key}`)
                .then(response => response.json())
                .then(dataTheatar => {
                    for (let i = 0; i < dataTheatar.items.length; i++) {
                        let obj = {
                            id: dataTheatar.items[i].id,
                            title: dataTheatar.items[i].title,
                            image: dataTheatar.items[i].image,
                            year: dataTheatar.items[i].year
                        }
                        //console.log(obj)
                        ExportdataTheatar.push(obj);
                    }
                    createCardElement(dataTheatar.items, "In Theaters");
                    init(dataTheatar, "InTheaters")
                });
            //>>>>>> top 250 movies fetch
            await fetch(`https://imdb-api.com/en/API/${urlMovie}/${key}`)
                .then(response => response.json())
                .then(dataMovie => {
                    for (let i = 0; i < dataMovie.items.length; i++) {
                        let obj = {
                            id: dataMovie.items[i].id,
                            title: dataMovie.items[i].title,
                            image: dataMovie.items[i].image,
                            year: dataMovie.items[i].year
                        }
                        //console.log(obj)
                        ExportdataMovie.push(obj);
                    }
                    createCardElement(dataMovie.items, "Top 250 Movies");
                    init(dataMovie, "Top250Movies")
                });
            //>>>>>> top 250 tv's fetch
            await fetch(`https://imdb-api.com/en/API/${urlTvs}/${key}`)
                .then(response => response.json())
                .then(dataTv => {
                    for (let i = 0; i < dataTv.items.length; i++) {
                        let obj = {
                            id: dataTv.items[i].id,
                            title: dataTv.items[i].title,
                            image: dataTv.items[i].image,
                            year: dataTv.items[i].year
                        }
                        //console.log(obj)
                        ExportdataTv.push(obj);
                    }
                    createCardElement(dataTv, "Top Tv's");
                    init(dataTv, "TopTvs")
                });
        }
        fetchingData()
    }
}
// fectch movie bi id to display single one
if (window.location.href.indexOf('displayselected') > -1) {
    fetch(`https://imdb-api.com/en/API/Title/${key}/${urlcut}`)
        .then(response => response.json())
        .then(data => {
            showDeatails(data)
        });
}
//Fetch show all...
if (window.location.href.indexOf('preview') > -1) {
    fetch(`https://imdb-api.com/en/API/${urlcut}/${key}`)
        .then(response => response.json())
        .then(data => {
            coming(data.items)
        });
}
if (window.location.href.indexOf('treiler') > -1) {
    fetch(`https://imdb-api.com/API/Trailer/${key}/${urlcut}`)
        .then(response => response.json())
        .then(data => {
            createIframe(data)
        });
}