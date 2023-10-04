'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//new url for countries api is https://countries-api-836d.onrender.com/countries/

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>    
    `

    countriesContainer.insertAdjacentHTML('beforeend', html);
}
/*
const getCountryAndNeighbour = (country) => {
    const request = new XMLHttpRequest();

    request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
    request.send();

    request.addEventListener("load", function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        renderCountry(data);

        const [neighbour] = data.borders;

        if(!neighbour) return;

        const request2 = new XMLHttpRequest();

        request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener("load", function() {
            const data2 = JSON.parse(this.responseText)
            renderCountry(data2, 'neighbour')
        })
    })
}

getCountryAndNeighbour('Portugal');
*/
/*///////////////////////////////////////////////////////////////////////////////
const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(errorMsg);

        return response.json();
    })
}

const renderError = function(msg) {
    countriesContainer.insertAdjacentHTML('beforeend', msg);
}

const getCountryData = function(country) {
    getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(function(data) {
        renderCountry(data[0])
        const neighbour = data[0].borders[0];

        if(!neighbour) throw new Error('Neighbour not found');

        return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
    })  .then(function(response) {
        console.log(response)
        if(!response.ok) throw new Error(`Neighbour not found ${response.status}`);
        return response.json()
    }).then(function(data) { renderCountry(data,'neighbour')})
    .catch(err=> {
        console.error(err);
        renderError(`Something went wrong ${err.message}, Try Again`)

    }).finally(()=>{
        countriesContainer.style.opacity = 1;
    })
}

btn.addEventListener('click', ()=>{getCountryData('japan')})
///////////////////////////////////////////////////////*/ 
 
/*
const whereAmI = function(lat,lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(
        (response) => response.json()
    ).then((data) => {
        console.log(data)
        console.log(`You are at ${data.country}, ${data.city}`)
    })
}

whereAmI(51,-0.12)*/
/*
console.log('test start');
setTimeout(()=>{
    console.log('0 sec timer')
}, 0);

Promise.resolve('Resolved promise 1').then(res => {
    console.log(res);
})

Promise.resolve('Resolve promise 2').then( res => {
    
    //for(let i = 0; i <= 10000000000; i++){}
    console.log(res);
})

console.log('test end')*/

/*
const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lotter draw is happening')

    setTimeout(()=>{
        if(Math.random() >= 0.5) {
            resolve('YOU WIN!')
        } else {
            reject('YOU LOSE!')
        }
    },3000) 
});

lotteryPromise.then(res => {
    console.log(res);
}).catch(err => {
    console.error(err)
});*/

const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    })
}
/*
wait(2).then(()=>{
    console.log('I waited for 2 seconds');
    return wait(1);
}). then(()=>{
    console.log('I waited for 1 sec')
})

Promise.resolve('abc').then(res=> {console.log(res)});
Promise.reject('abc').catch(res=> {console.error(res)});



const getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position), 
            err => reject(err)
        );
    })
}

getPosition().then(pos => console.log(pos));
/*

const imagesContainer = document.querySelector('.images');


const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const imgEl = document.createElement('img');
        imgEl.src =  `img/img-${imgPath}.jpg`
        console.log(imgEl);
        resolve(imgEl);
    })
}

createImage(1).then((res)=>{
    imagesContainer.appendChild(res)
    wait(2).then(()=> {
        console.log(res)
        res.style.display = 'none';

        return createImage(2);;
    }).then((res)=>{
        imagesContainer.appendChild(res)
        wait(2).then(()=> {
            console.log(res)
            res.style.display = 'none';
        })
    })
}).catch(err => {
    console.error(err)
})*/
/*
const whereAmI = async function(country) {
    try {
        const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`);
        if(!res.ok) throw new Error("PROBLEMS!")
        const data = await res.json()

        return data;
    } catch(err) {
        console.log("something went wrong")
    }
}

whereAmI('portugal').then(res => console.log(res))

*/
/*
const get3Countries = async function(c1,c2,c3) {
    try {

        const res = await Promise.all([
             fetch(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
             fetch(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
             fetch(`https://countries-api-836d.onrender.com/countries/name/${c3}`)
        ])

        console.log(res)
        const data = await Promise.all([
             res[0].json(),
             res[1].json(),
             res[2].json()
        ]) 
        console.log(data)


        console.log([data[0][0].capital, data[1][0].capital, data[2][0].capital])


    } catch(err) {
        console.error(err,'!!!')
    }
}

get3Countries('portugal', 'canada', 'tanzania')*//*
    const timeout = function(s) {
        return new Promise(function(_,reject) {
            setTimeout(function() {
                reject(new Error('Request took too long'))
            },s*1000)
        })
    }

   const racing =  async function(c1,c2,c3) {
        
        const res = await Promise.race([
            fetch(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
            fetch(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
            fetch(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
            timeout(1)
       ])

       const [data] = await res.json()

       console.log(data.name) 
    }

racing('portugal', 'usa', 'canada');

//Promise.allSettled

Promise.allSettled([
    Promise.resolve('success'),
    Promise.resolve('success'),
    Promise.reject('error'),
    Promise.resolve('success'),
    Promise.resolve('success'),

]).then((res) => console.log(res))

//Promise.any

Promise.any([
    Promise.reject('error'),
    Promise.resolve('success 1'),
    Promise.resolve('succes 2'),
    Promise.reject('error'),
    Promise.resolve('success 3'),
    Promise.resolve('success 4'),

]).then((res) => console.log(res));

const ret = 4;
console.log(ret);*/