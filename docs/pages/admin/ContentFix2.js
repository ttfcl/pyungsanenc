//.ck-editor__editable
var superkey = null
var end = document.querySelector("#end")
var del = document.querySelector("#del")
var Ptitle = document.querySelector(".title_modal")
var happyend = document.querySelector(".happyend")
var happyend2 = document.querySelector(".happyend2")
var badend = document.querySelector(".badend")
var test = document.querySelector(".gesipan_content2")
var end = document.querySelector(".king")
var end2 = document.querySelector(".king2")


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
  master()
})

const master = () => {
  var title = document.querySelector("#title")
  var time = document.querySelector("#time")
  var maker = document.querySelector("#maker")
  var img = document.querySelector("#img")
  let masterKey = localStorage.getItem("key2")
  title.value = gonjiList[gonjiList.length - masterKey].title
  time.value = gonjiList[gonjiList.length - masterKey].time
  maker.value = gonjiList[gonjiList.length - masterKey].maker
  img.value = gonjiList[gonjiList.length - masterKey].masterimg
  if(gonjiList[gonjiList.length - masterKey].masterimg === (undefined || '')) {
    img.value = ''
  }
  superkey = gonjiList[gonjiList.length - masterKey].index
  var 템플릿 = gonjiList[gonjiList.length - masterKey].content
  test.append(템플릿)
  localStorage.removeItem("key2")
}




end.onclick = function() {
  Ptitle.classList.add('hide')
  happyend.classList.add('hide')
  if(title.value === '' || (time.value === '') || (maker.value === '')) {
    return Ptitle.classList.remove('hide')
  }
  badend.classList.add('hide')
  happyend.classList.remove('hide')
  happyend2.classList.remove('hide')  

  let directer = '1'  
  let index = 1
  let count = superkey
  for(let i = 1 ; i < count ; i++) {
    directer = directer + '1'
    index = index + 1
  }
  let title2 = title.value
  let maker2 = maker.value
  let time2 = time.value
  let img2 = img.value
  if(img2 === 'undefined') {
    img2 === ''
  }
  let content = CKEDITOR.instances.editor1.getData()
  var save = {
    'title' : title2,
    'maker' : maker2,
    'time' : time2,
    'content' : content,
    'masterimg' : img2,
    'index' : index
  }
  db.collection('review').doc(directer).set(save)
}

  del.onclick = function() {
    var directer = ''  
    let count = superkey
    let masterCount = gonjiList.length
    for(let i = 0 ; i < count ; i++) {
      directer = directer + '1'
      gonjiList.pop()
    }
    db.collection('review').doc(directer).delete()
    for(let j = 0 ; j < masterCount - count ; j++) {
      newgonjiList = gonjiList.pop()
    var newindex = superkey
    superkey++
    var newtitle = newgonjiList.title
    var newmaker = newgonjiList.maker
    var newtime = newgonjiList.time
    var newcontent = newgonjiList.content
    var newimg = newgonjiList.masterimg
    if(newimg === 'undefined') {
      newimg = ''
    }
    var save = {
      'title' : newtitle,
      'maker' : newmaker,
      'time' : newtime,
      'content' : newcontent,
      'masterimg' : newimg,
      'index' : newindex
    }
    db.collection('review').doc(directer).set(save)
    directer = directer + '1'
    db.collection('review').doc(directer).delete()
    }
}
var king = document.querySelector(".king")
var king2 = document.querySelector(".king2")
if(localStorage.getItem('master') !== '501') {
  king.classList.add('hide')
  king2.classList.add('hide')
}