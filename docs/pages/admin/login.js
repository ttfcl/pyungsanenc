
let login = document.querySelector('#login')
var Ptitle = document.querySelector(".title_modal")
var happyend = document.querySelector(".happyend")
var happyend2 = document.querySelector(".happyend2")
var badend = document.querySelector(".badend")
var js = []
var firebaseConfig = {
  apiKey: "AIzaSyA-fKAE9folh2nGLyFKWjxzhgRsvZbteIc",
  authDomain: "pyungsanenc-a45a7.firebaseapp.com",
  projectId: "pyungsanenc-a45a7",
  storageBucket: "pyungsanenc-a45a7.appspot.com",
  messagingSenderId: "259473466937",
  appId: "1:259473466937:web:a3f09bf219c5930d0ccfe8"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  db.collection('impo').get().then((결과)=>{
    결과.forEach((doc)=>{
      js.unshift(doc.data())
    })
  })

login.onclick = function() {
    let id = document.querySelector("#id")
    let pw = document.querySelector("#pw")
    console.log(id.value)
    if(id.value === "admin" && pw.value === "fadsaew123!#") {
        happyend.classList.remove('hide')
        happyend2.classList.remove('hide')
        Ptitle.classList.add('hide')
        badend.classList.add('hide')
        localStorage.removeItem("master")
        localStorage.setItem("master", "501")
    } else {
        Ptitle.classList.remove('hide')
        badend.classList.remove('hide')
        localStorage.removeItem("master")
    }
} 
