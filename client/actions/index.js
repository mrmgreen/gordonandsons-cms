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
   }
}

export function imageCancel() {
  return {
    type: 'IMAGECANCEL',
   }
}
