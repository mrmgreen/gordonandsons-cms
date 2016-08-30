import _rows from './defaultData'

const TIMEOUT = 200;

export default {
  getData(cb, timeout) {
    setTimeout(() => cb(_rows), timeout || TIMEOUT)
  },
}
