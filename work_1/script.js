/* ==================== 弹窗控制逻辑 ==================== */

// 1. 打开弹窗函数
// id 参数就是你在 onclick 里传进来的 'modal-1', 'modal-2' 等
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex'; // 显示弹窗（flex布局配合居中）
    }
}

// 2. 关闭所有弹窗函数
function closeAllModals() {
    // 找到所有 class 为 modal-overlay 的元素
    const modals = document.querySelectorAll('.modal-overlay');
    // 遍历每一个，把它们隐藏
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// 3. 点击遮罩层关闭（点击黑色背景关闭，点击内容区域不关闭）
function closeModal(event) {
    // event.target 鼠标点到的元素
    // event.currentTarget 是绑定了事件的元素（是 modal-overlay）
    // 如果点的是背景（overlay），就关闭；如果点的是里面的盒子，就不关
    if (event.target === event.currentTarget) {
        closeAllModals();
    }
}

// 4. 按下键盘 ESC 键也可以关闭弹窗
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllModals();
    }
});