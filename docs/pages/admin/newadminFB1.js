  var end = document.querySelector("#end")
  var title = document.querySelector("#title")
  var time = document.querySelector("#time")
  var maker = document.querySelector("#maker")
  var Ptitle = document.querySelector(".title_modal")
  var happyend = document.querySelector(".happyend")
  var happyend2 = document.querySelector(".happyend2")
  var badend = document.querySelector(".badend")
  var king = document.querySelector(".king")

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
  db.collection('product').get().then((결과)=>{
    결과.forEach((doc)=>{
      gonjiList.unshift(doc.data())
    })
  })
  
  

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
  let count = gonjiList.length
  for(let i = 0 ; i < count ; i++) {
    directer = directer + '1'
    index = index + 1
  }
  let title2 = title.value
  let maker2 = maker.value
  let time2 = time.value
  var content = CKEDITOR.instances.editor1.getData()
  var save = {
    'title' : title2,
    'maker' : maker2,
    'time' : time2,
    'content' : content,
    'index' : index
  }
  db.collection('product').doc(directer).set(save)
  }

    
  if(localStorage.getItem('master') !== '501') {
    king.classList.add('hide')
  }