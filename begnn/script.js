(()=>{

  let textInput = document.getElementById('text_input')
  let btnSubmit = document.getElementById('btn_submit')
  let output = document.getElementById('demo')

  btnSubmit.addEventListener('click', () => {

    let text = textInput.value
    let er = new RegExp('[:;,.!?]', 'g')

    let start = 0, 
        index = 0,
        str = null
    
    let out = ``

    while ((array1 = er.exec(text)) !== null) {
      
      index = er.lastIndex        
      str = text.substr(start, index - start)
      
      if (str !== '')
        out += `${str}\n\n`
          
      start = index + 1
      str = null
      
    }

    output.innerText = out
  })



})()