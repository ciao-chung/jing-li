class Base {
  // 設定title tag
  setTitle(title) {
    if(typeof(title) != 'string') return
    document.title = title
  }
}
export default new Base()