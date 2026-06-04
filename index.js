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



// 首頁的動畫效果：程式碼來源->Gemini
document.addEventListener('DOMContentLoaded', () => {
    // 鎖定目標塗鴉元素
    const magneticElements = document.querySelectorAll('.decorate-1, .decorate-2, .decorate-3, .decorate-4');
    
    // 參數微調：擴大感應半徑，但大幅縮小最大位移
    const triggerRadius = 200;   // 滑鼠在 200px 內就會開始溫柔感應
    const maxDisplacement = 8;   // 最大只位移 8px，確保效果非常精緻、不突兀

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        magneticElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elX = rect.left + rect.width / 2;
            const elY = rect.top + rect.height / 2;

            const deltaX = mouseX - elX;
            const deltaY = mouseY - elY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance < triggerRadius) {
                // 漸進式比例：越靠近移動越自然
                const ratio = (triggerRadius - distance) / triggerRadius;
                
                // 計算極微量的位移
                const moveX = (deltaX / distance) * maxDisplacement * ratio;
                const moveY = (deltaY / distance) * maxDisplacement * ratio;

                el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                // 離開感應區完美歸位
                el.style.transform = 'translate(0px, 0px)';
            }
        });
    });
});