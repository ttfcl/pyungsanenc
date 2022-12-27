let gesipan = document.querySelector(".gesipan")
let gesipanSoket = document.querySelector(".gesipan_soket")
let gesipanPage = document.querySelector(".gesipan_page")


const master = () => {
  let gesipan = document.querySelector(".gesipan")
  let gesipanSoket = document.querySelector(".gesipan_soket")
  let gesipanPage = document.querySelector(".gesipan_page")

  const converter = function (x) {
    const gesipanR = document.createElement("div")
    gesipanR.className = "gesipan_r"
    gesipanR.id = `${userList.length - x}`
    const gesipanIndex = document.createElement("div")
    gesipanIndex.className = "gesipan_index"
    gesipanIndex.textContent = userList[x].displayName
    const gesipanTitle = document.createElement("div")
    gesipanTitle.className = "gesipan_title"
    gesipanTitle.textContent = userList[x].email
    const gesipanMaker = document.createElement("div")
    gesipanMaker.className = "gesipan_maker setKey"
    gesipanMaker.textContent = userList[x].grade
    const gesipanMaker2 = document.createElement("button")
    gesipanMaker2.className = "gesipan_maker change"
    gesipanMaker2.textContent = "변경"
    gesipanMaker2.id = userList[x].email
    const gesipanTime = document.createElement("div")
    gesipanTime.className = "gesipan_time"
    gesipanTime.textContent = userList[x].password
    gesipanR.append(gesipanIndex, gesipanTitle, gesipanMaker, gesipanMaker2, gesipanTime)
    gesipanSoket.append(gesipanR)
}

const converterButton = function (j) {
    const gesipanButton = document.createElement("button")
    gesipanButton.className = "gesipan_button"
    gesipanButton.textContent = j
    gesipanPage.append(gesipanButton)
}

const render = (x) => {
    let count = 0;
    if(userList.length < x + 20) {
      count = userList.length
    }else {
      count = x + 20
    }
    for(i = x ; i < count ; i++) {
        converter(i)
    }
}

const renderButton = (x) => {
    let count = 0 ;
    if(userList.length/20 > x + 10) {
        count = x + 10
    }else {
        count = userList.length/20
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
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let ymx = document.querySelectorAll(".change")
      ymx.forEach.call(ymx, function(e) {
      e.addEventListener("click", hjkl)
      function hjkl () {
        
      bd.collection('user').doc(e.id).update({'grade' : document.querySelector('.mini').value}).then(() => {
        setTimeout(function() {
          alert('변경사항이 저장되었습니다.\n새로고침 후 목록에도 반영됩니다.') 
        }, 2000); 
      })
    }
    }) 
      }
    })    
    let ymx = document.querySelectorAll(".change")
    ymx.forEach.call(ymx, function(e) {
    e.addEventListener("click", hjkl)
    function hjkl () {
      
      bd.collection('user').doc(e.id).update({'grade' : document.querySelector('.mini').value}).then(() => {
        setTimeout(function() {
          alert('변경사항이 저장되었습니다.\n새로고침 후 목록에도 반영됩니다.') 
        }, 2000); 
      })
    }
    })
}




let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let ymx = document.querySelectorAll(".change")
      ymx.forEach.call(ymx, function(e) {
      e.addEventListener("click", hjkl)
      function hjkl () {
        
      bd.collection('user').doc(e.id).update({'grade' : document.querySelector('.mini').value}).then(() => {
        setTimeout(function() {
          alert('변경사항이 저장되었습니다.\n새로고침 후 목록에도 반영됩니다.') 
        }, 2000); 
      })
    }
    })  
      }
    })    

    let ymx = document.querySelectorAll(".change")
    ymx.forEach.call(ymx, function(e) {
    e.addEventListener("click", hjkl)
    function hjkl () {
      
      bd.collection('user').doc(e.id).update({'grade' : document.querySelector('.mini').value}).then(() => {
        setTimeout(function() {
          alert('변경사항이 저장되었습니다.\n새로고침 후 목록에도 반영됩니다.') 
        }, 2000); 
      })
    }
    })  

let gesipanPageButtonP = document.querySelector(".gesipan_page_button_p")
let gesipanPageButtonN = document.querySelector(".gesipan_page_button_n")
let buttonCount = 0

const converter = function (x) {
  const gesipanR = document.createElement("div")
    gesipanR.className = "gesipan_r"
    gesipanR.id = `${userList.length - x}`
    const gesipanIndex = document.createElement("div")
    gesipanIndex.className = "gesipan_index"
    gesipanIndex.textContent = userList[x].displayName
    const gesipanTitle = document.createElement("div")
    gesipanTitle.className = "gesipan_title"
    gesipanTitle.textContent = userList[x].email
    const gesipanMaker = document.createElement("input")
    gesipanMaker.className = "gesipan_maker setKey"
    gesipanMaker.value = userList[x].grade
    const gesipanMaker2 = document.createElement("button")
    gesipanMaker2.className = "gesipan_maker change"
    gesipanMaker2.textContent = "변경"
    const gesipanTime = document.createElement("div")
    gesipanTime.className = "gesipan_time"
    gesipanTime.textContent = userList[x].password
    gesipanR.append(gesipanIndex, gesipanTitle, gesipanMaker, gesipanMaker2, gesipanTime)
    gesipanSoket.append(gesipanR)
}

const render = (x) => {
  let count = 0;
  if(userList.length < x + 20) {
    count = userList.length
  }else {
    count = x + 20
  }
  for(i = x ; i < count ; i++) {
      converter(i)
  }
}

const renderButton = (x) => {
  let count = 0 ;
  if(userList.length/20 > x + 10) {
      count = x + 10
  }else {
      count = userList.length/20
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
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let ymx = document.querySelectorAll(".change")
      ymx.forEach.call(ymx, function(e) {
      e.addEventListener("click", hjkl)
      function hjkl () {
        
      bd.collection('user').doc(e.id).update({'grade' : document.querySelector('.mini').value}).then(() => {
        setTimeout(function() {
          alert('변경사항이 저장되었습니다.\n새로고침 후 목록에도 반영됩니다.') 
        }, 2000); 
      })
      }
      }) 
    }
    })    

    let ymx = document.querySelectorAll(".change")
    ymx.forEach.call(ymx, function(e) {
    e.addEventListener("click", hjkl)
    function hjkl () {
      
      bd.collection('user').doc(e.id).update({'grade' : document.querySelector('.mini').value}).then(() => {
        setTimeout(function() {
          alert('변경사항이 저장되었습니다.\n새로고침 후 목록에도 반영됩니다.') 
        }, 2000); 
      })
    }
    })  
}  
gesipanPageButtonN.onclick = function() {
    if(buttonCount < Math.ceil(userList.length/20)-10){
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
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let ymx = document.querySelectorAll(".change")
      ymx.forEach.call(ymx, function(e) {
      e.addEventListener("click", hjkl)
      function hjkl () {
        
      bd.collection('user').doc(e.id).update({'grade' : document.querySelector('.mini').value}).then(() => {
        setTimeout(function() {
          alert('변경사항이 저장되었습니다.\n새로고침 후 목록에도 반영됩니다.') 
        }, 2000); 
      })
    }
    }) 
      }
    })    

    let ymx = document.querySelectorAll(".change")
    ymx.forEach.call(ymx, function(e) {
    e.addEventListener("click", hjkl)
    function hjkl () {
      
      bd.collection('user').doc(e.id).update({'grade' : document.querySelector('.mini').value}).then(() => {
        setTimeout(function() {
          alert('변경사항이 저장되었습니다.\n새로고침 후 목록에도 반영됩니다.') 
        }, 2000); 
      })
    }
    })
}