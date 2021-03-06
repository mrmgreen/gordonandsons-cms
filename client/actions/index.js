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

export function textHighlighted(textHighlighted) {
  return {
    type: 'TEXTHIGHLIGHTED',
    textHighlighted
  }
}

export function imageUpload(image) {
  return {
    type: 'IMAGEUPLOAD',
    src: image.src,
    size: image.size,
    file: image.file,
   }
}

export function imageCancel() {
  return {
    type: 'IMAGECANCEL',
   }
}

export function startImageUpload(imageFile) {
  return (dispatch, getState) => {
    const formData = new FormData();
    formData.append('file', imageFile, imageFile.name);

    const options = {
      body: formData,
      method: 'POST',
    };

    const request = new Request('/image/create', options);

    return fetch(request).then((response) => {
      console.log('helloooooo request is good', response);
    });
  }
}
