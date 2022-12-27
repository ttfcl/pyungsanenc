var firebaseConfig = {
  apiKey: "AIzaSyCJeAlubz3MjBpH0oI0LCjrGut2HP-jxRA",
  authDomain: "madoyo-78d70.firebaseapp.com",
  projectId: "madoyo-78d70",
  storageBucket: "madoyo-78d70.appspot.com",
  messagingSenderId: "127737485259",
  appId: "1:127737485259:web:f28053ac2b40fdc08b084e"
  };
  firebase.initializeApp(firebaseConfig);

const bd = firebase.firestore();
bd.collection('product2').get().then((결과)=>{
    결과.forEach((doc)=>{
      gonjiList.unshift(doc.data())
   })
   master();
})
