// Promise uzak bir veri kaynağında çekilecek olan verilerin sarıp hata durumunda reject hata olmadığı durumda resolve eden bir asenkron iletişim şeklidir.

// resolve sunucundan veriyi çözme işlemi (hata olmadığı durumda dönen fonksiyon)
// reject => sunucudaki bir sorun sebebi ile veriyi döndüremeyip hata döndürme fonksiyonu

// senkron programlama ve asenkron programlama
// js yarı asenkron biir dildir.

const a = 5;
console.log('a', a)

// belirli bir zaman dilimi sonra ilgili kod bloğunu çalışıtıran BOM işlemi. Browser Object Model
setTimeout(function () {
    const b = 10;
    console.log('b', b);
}, 1000)

const c = 15;
console.log('c', c);


const promise1 = new Promise((resolve, reject) => {

    const k = 100;
    resolve(k);

});

const promise2 = new Promise((resolve,reject) => {
    setTimeout(function () {
       const l = 20;

       resolve(l);

    }, 1000);
})

const promise3 = new Promise((resolve,reject) => {
    const c = 10;
    // resolve(c);
    reject('err');
});


// 1. kullanım promise chain => promise zinciri
// ECMASCRIPT 6 ile hayata geçti

promise1.then(response => {
    console.log('response-1', response);
    promise2.then(response2 => {
        console.log('response-2', response2)
        promise3.then(response3 => {
            console.log('response-3', response3)
        }).catch(err3=>{
            console.log('err3', err3)
        })
    }).catch(err2 => {
        console.log('err2', err2)
    })
}).catch(err1=> {
    console.log('err1', err1)
});

// 2. kullanım async awit kullanımı ECMASCRIPT 7 versiyonu ile hayatımıza geçti.

try {
let result1 = await promise1;
let result2 = await promise2;
let result3 = await promise3;

console.log('result1,result2,result3',result1,result2,result3);
    
} catch (error) {
    console.log('err', error);
}




// promise sözünü tutuğu durum then sözünü tutamadığı durumu ise catch yakalar.

// promise
//     .then(response => {
//         console.log('promise-response', response)
//     }).catch(err => {
//         console.log('err', err);
//     });

