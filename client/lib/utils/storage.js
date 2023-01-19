import {isString } from "./typeOf.js";


const {
  //이것도 이름 바꾼거임
  localStorage : storage,
        // 이름을 바꾼거임
  JSON : {stringify : serialize, parse : deserialize}
} = globalThis

const albums = [
  {
    id: 'album_0zie',
    title: 'Nightmare',
    artist: '오월오일 ( 五月五日 )',
    'release-date': '2022.10.08',
    like: 147,
    'song-count': 5,
    cover: {
      size: 640,
      quality: 100,
      src: 'https://cdnimg.melon.co.kr/cm2/album/images/110/73/494/11073494_20221007160706_500.jpg/melon/resize/640/quality/100/optimize',
    },
  },
  {
    id: 'album_9ipw',
    title: '흔들리지 않아 (Feat. 폴킴)',
    artist: 'TRADE L',
    'release-date': '2022.10.07',
    like: 306,
    'song-count': 1,
    cover: {
      size: 640,
      quality: 100,
      src: 'https://cdnimg.melon.co.kr/cm2/album/images/110/72/305/11072305_20221006135934_500.jpg/melon/resize/640/quality/100/optimize',
    },
  },
];

//서버에 데이터를  보낼때 서버가 알아 볼 수 있는 언어로 바꾼다. 
// 객체화를 ------> 문자화로 바꾼다. 
export function saveStorage(key , value) {
  return new Promise( (res, rej)=> {
    if(isString(key)) {
      storage.setItem(key,  serialize(value));
      res();
    }else {
      rej({message : '타입이 잘 못됐네요 ~ '});
    }
  })

}
saveStorage('name', albums);


//다시 객체화 시킨거다 
// 문자화 되어 있던 걸 객체화를 해서 우리가 볼 수 있다.
// 로컬 스토리지에 있는 데이터를 
export function loadStorage(key) {
  return new Promise( (res, rej)=> {
    if(isString(key)) {
      res( deserialize (storage.getItem(key)));
    }else {
      rej({message : '타입이 잘 못됐네요 ~ '});
    }
  })

}
loadStorage('name').then((res) => {
  console.log(res);
})

// 전체 한번 지우는 파트

export function deleteStorage(key) {
  return new Promise( (res, rej)=> {
    !key ? storage.clear :  storage.removeItem(key);
  })
}


console.log( storage.getItem('name'));