// 合同对比功能
const c = document.getElementById('container')
const l = document.querySelector('.left')
const r = document.querySelector('.right')
const lc = l.querySelector('.child')
const rc = r.querySelector('.child')

// 这段代码只是为了方便插入很多文本内容
let s1 = ''
let s2 = ''
let currentTab = 0
// for (let i = 0; i < 500; i++) {
//     s1 += ''
//     s2 += ''
// }
lc.innerHTML = s1
rc.innerHTML = s2
let scale = (rc.offsetHeight - r.offsetHeight) / (lc.offsetHeight - l.offsetHeight)
l.addEventListener('scroll', () => {
    if (currentTab !== 1) return
    r.scrollTop = l.scrollTop * scale
})
r.addEventListener('scroll', () => {
    if (currentTab !== 2) return
    l.scrollTop = r.scrollTop / scale
})
l.addEventListener('mouseover', () => {
    // 1 表示表示当前鼠标位于 .left元素范围内
    currentTab = 1
})
r.addEventListener('mouseover', () => {
    // 2 表示表示当前鼠标位于 .right元素范围内
    currentTab = 2
})