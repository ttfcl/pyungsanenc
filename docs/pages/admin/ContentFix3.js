//.ck-editor__editable
var del = document.querySelector("#del")
var superkey = localStorage.getItem("key3")
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
db.collection('question').get().then((결과)=>{
  결과.forEach((doc)=>{
    questionList.unshift(doc.data())
  })
  master()
})

const master = () => {
  let gesipanTopindex = document.querySelector(".gesipan_topindex")
  let gesipanToptitle = document.querySelector(".gesipan_toptitle")
  let gesipanTopmaker = document.querySelector(".gesipan_topmaker")
  let gesipanToptime = document.querySelector(".gesipan_toptime")
  let gesipanContent = document.querySelector(".gesipan_content")
  let masterKey = localStorage.getItem("key3")
  localStorage.removeItem("key3")

  const render = () => {
    gesipanTopindex.textContent = masterKey
    gesipanToptitle.textContent = questionList[questionList.length - masterKey].phone1 + '-' + questionList[questionList.length - masterKey].phone2 + '-' + questionList[questionList.length - masterKey].phone3
    gesipanTopmaker.textContent = questionList[questionList.length - masterKey].name
    gesipanToptime.textContent = questionList[questionList.length - masterKey].time
    var 템플릿 = String(`${questionList[questionList.length - masterKey].content}`)
    $(".gesipan_content").append(템플릿)
  }   
  render()
}


  del.onclick = function() {
    var directer = ''  
    let count = superkey
    let masterCount = questionList.length
    for(let i = 0 ; i < count ; i++) {
      directer = directer + '1'
      questionList.pop()
    }
    console.log(directer)
    db.collection('question').doc(directer).delete().then(() => {
      for(let j = 0 ; j < masterCount - count ; j++) {
        console.log("2")
        let newquestionList = questionList.pop()
        var newindex = superkey
        superkey++
        var newname = newquestionList.name
        var newphone1 = newquestionList.phone1
        var newphone2 = newquestionList.phone2
        var newphone3 = newquestionList.phone3
        var newcontent = newquestionList.content
        var time = newquestionList.time
        var save = {
          'name' : newname,
          'phone1' : newphone1,
          'phone2' : newphone2,
          'phone3' : newphone3,
          'content' : newcontent,
          'time' : time,
          'index' : newindex
        }
        db.collection('question').doc(directer).set(save)
        directer = directer + '1'
        db.collection('question').doc(directer).delete()
      }
    } )
    
}
var king = document.querySelector(".king")
var king2 = document.querySelector(".king2")
