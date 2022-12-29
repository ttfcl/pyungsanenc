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
db.collection('product2').get().then((결과)=>{
    결과.forEach((doc)=>{
      gonjiList.unshift(doc.data())
   })
   master();
})
