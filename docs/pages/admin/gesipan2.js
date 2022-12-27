let gesipan = document.querySelector(".gesipan")
let gesipanSoket = document.querySelector(".gesipan_soket")
let gesipanPage = document.querySelector(".gesipan_page")

const master = () => {
  let gesipan = document.querySelector(".gesipan")
  let gesipanSoket = document.querySelector(".gesipan_soket")
  let gesipanPage = document.querySelector(".gesipan_page")

  const converter = function (x) {
    const reivewR = document.createElement("div")
    reivewR.classList = "review_r col-5 col-lg-3"
    reivewR.id = `${gonjiList.length - x}`
    const masterImg = document.createElement("img")
    masterImg.src = gonjiList[x].masterimg
    if(gonjiList[x].masterimg === '') {
      masterImg.src = '../../image/tomato.jpg'
    }
    masterImg.classList = "reviewImg"
    const reviewTitle = document.createElement("p")
    reviewTitle.className = "reviewTitle"
    reviewTitle.textContent = gonjiList[x].title
    const reviewTime = document.createElement("p")
    reviewTime.className = "reviewTime"
    reviewTime.textContent = gonjiList[x].time
    reivewR.append(masterImg, reviewTitle, reviewTime)
    gesipanSoket.append(reivewR)
}

const converterButton = function (j) {
    const gesipanButton = document.createElement("button")
    gesipanButton.className = "gesipan_button"
    gesipanButton.textContent = j
    gesipanPage.append(gesipanButton)
}

const render = (x) => {
    let count = 0;
    if(gonjiList.length < x + 20) {
      count = gonjiList.length
    }else {
      count = x + 20
    }
    for(i = x ; i < count ; i++) {
        converter(i)
    }
}

const renderButton = (x) => {
    let count = 0 ;
    if(gonjiList.length/20 > x + 10) {
        count = x + 10
    }else {
        count = gonjiList.length/20
    }
    for(j = x ; j < count ; j++) {
        converterButton(j+1)
    }
}

render(0)
renderButton(0)



let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.review_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".review_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key2")
      localStorage.setItem("key2", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".review_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key2")
      localStorage.setItem("key2", e.id)
      }
    }) 

}



let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.review_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".review_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key2")
      localStorage.setItem("key2", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".review_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key2")
      localStorage.setItem("key2", e.id)
      }
    })    

let gesipanPageButtonP = document.querySelector(".gesipan_page_button_p")
let gesipanPageButtonN = document.querySelector(".gesipan_page_button_n")
let buttonCount = 0

const converter = function (x) {
  const reivewR = document.createElement("div")
  reivewR.classList = "review_r col-5 col-lg-3"
  reivewR.id = `${gonjiList.length - x}`
  const masterImg = document.createElement("img")
  masterImg.src = gonjiList[x].masterimg
  if(gonjiList[x].masterimg === '') {
    masterImg.src = '../../image/tomato.jpg'
  }
  masterImg.classList = "reviewImg"
  const reviewTitle = document.createElement("p")
  reviewTitle.className = "reviewTitle"
  reviewTitle.textContent = gonjiList[x].title
  const reviewTime = document.createElement("p")
  reviewTime.className = "reviewTime"
  reviewTime.textContent = gonjiList[x].time
  reivewR.append(masterImg, reviewTitle, reviewTime)
  gesipanSoket.append(reivewR)
}

const render = (x) => {
  let count = 0;
  if(gonjiList.length < x + 20) {
    count = gonjiList.length
  }else {
    count = x + 20
  }
  for(i = x ; i < count ; i++) {
      converter(i)
  }
}

const renderButton = (x) => {
  let count = 0 ;
  if(gonjiList.length/20 > x + 10) {
      count = x + 10
  }else {
      count = gonjiList.length/20
  }
  for(j = x ; j < count ; j++) {
      converterButton(j+1)
  }
}

gesipanPageButtonP.onclick = function() {
    if(buttonCount !== 0){
        const gesipanR = document.querySelectorAll('.gesipan_button')
        for(let a of gesipanR) {
          a.remove()
        }
      buttonCount = buttonCount - 10
      const gesipanPage = document.querySelector(".gesipan_page")
      renderButton(buttonCount)
      gesipanPage
      } 
      let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.review_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".review_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key2")
      localStorage.setItem("key2", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".review_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key2")
      localStorage.setItem("key2", e.id)
      }
    })   
}  
gesipanPageButtonN.onclick = function() {
    if(buttonCount < Math.ceil(gonjiList.length/20)-10){
        const gesipanR = document.querySelectorAll('.gesipan_button')
          for(let a of gesipanR) {
            a.remove()
          }
        buttonCount = buttonCount + 10
        const gesipanPage = document.querySelector(".gesipan_page")
        renderButton(buttonCount)
        gesipanPage
        }  
        let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.review_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".review_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key2")
      localStorage.setItem("key2", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".review_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key2")
      localStorage.setItem("key2", e.id)
      }
    })  
}

let king = document.querySelector('.king')

if(localStorage.getItem('master') !== '501') {
  king.classList.add('hide')
}