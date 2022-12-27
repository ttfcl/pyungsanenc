const master2 = () => {
    let gesipanTopindex = document.querySelector(".gesipan_topindex")
    let gesipanToptitle = document.querySelector(".gesipan_toptitle")
    let gesipanTopmaker = document.querySelector(".gesipan_topmaker")
    let gesipanToptime = document.querySelector(".gesipan_toptime")
    let masterKey = localStorage.getItem("key2")
    localStorage.removeItem("key2")

    const render = () => {
      gesipanTopindex.textContent = masterKey
      gesipanToptitle.textContent = gonjiList[gonjiList.length - masterKey].title
      gesipanTopmaker.textContent = gonjiList[gonjiList.length - masterKey].maker
      gesipanToptime.textContent = gonjiList[gonjiList.length - masterKey].time
      let gesipanMasterImg = gonjiList[gonjiList.length - masterKey].masterimg
      if(gesipanMasterImg === undefined) {
        gesipanMasterImg = '../../image/tomato.jpg'
      }
      var 대표이미지 = `<img src='${gesipanMasterImg}' width='100%'>`
      var 템플릿 = `${gonjiList[gonjiList.length - masterKey].content}`
      $(".gesipan_content").append(대표이미지, 템플릿)
      
    }   
    render()
}

var firebaseConfig = {
  apiKey: "AIzaSyCJeAlubz3MjBpH0oI0LCjrGut2HP-jxRA",
  authDomain: "madoyo-78d70.firebaseapp.com",
  projectId: "madoyo-78d70",
  storageBucket: "madoyo-78d70.appspot.com",
  messagingSenderId: "127737485259",
  appId: "1:127737485259:web:f28053ac2b40fdc08b084e"
  };
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.collection('review').get().then((결과)=>{
    결과.forEach((doc)=>{
      gonjiList.unshift(doc.data())
   })
   master2();
})
