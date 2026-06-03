//單行註解
/* 多行註解 */

//導覽列的漢堡選單
const menuBtn = document.querySelector('.menu-btn')
const navList = document.querySelector('.nav-list')
/*當漢堡按鈕被點擊時，
    如果有active的部分要拿掉；如果沒有要加上去
*/
menuBtn.addEventListener('click', function () {
    navList.classList.toggle('active')
    document.body.classList.toggle('menu-open')
})