export function textBold() {
  return {
    type: 'BOLD',
   }
}

export function textItalics() {
  return { type: 'ITALICS' }
}

export function textUnderline() {
  return { type: 'UNDERLINE' }
}

export function imageUpload() {
  return (dispatch) => {
    let result;
    const url = '/image/create';
    const options = {
      method: 'POST',
    }
    fetch(url, options).then((response) => {
      console.log('post succesful');
      return result = response.json();
    }).catch((error) => {
      console.log('error when uploading image', error);
      return result = 'noooo';
    })
    return {
      type: 'IMAGEUPLOAD',
      result,
     }
   }
}

export function textHighlighted(textHighlighted) {
  return {
    type: 'TEXTHIGHLIGHTED',
    textHighlighted
  }
}
