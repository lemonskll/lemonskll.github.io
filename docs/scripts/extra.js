// 当 DOM 内容加载完成后执行
document.addEventListener('DOMContentLoaded', function() {

    // 创建随机装饰方块函数
    function createRandomBlocks() {
        const container = document.getElementById('mainContainer'); // 获取容器元素
        const colors = ['var(--primary-red)', 'var(--primary-blue)',
                      'var(--primary-yellow)', 'var(--black)']; // 预定义颜色数组

        // 创建 12 个方块
        for(let i = 0; i < 12; i++) {
            const block = document.createElement('div');
            block.className = 'deco-block';

            // 设置随机尺寸（50-200px）
            block.style.width = Math.random() * 150 + 50 + 'px';
            block.style.height = Math.random() * 150 + 50 + 'px';

            // 设置随机位置（0-90%范围内）
            block.style.left = Math.random() * 90 + '%';
            block.style.top = Math.random() * 90 + '%';

            // 随机选择颜色
            block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            // 设置随机旋转和缩放（0.5-1 倍）
            block.style.transform = `
                rotate(${Math.random() * 360}deg)
                scale(${Math.random() * 0.5 + 0.5})
            `;

            container.appendChild(block); // 将方块添加到容器
        }
    }

    // 背景颜色动画相关
    let hue = 0; // 色相值
    function updateBackground() {
        hue = (hue + 0.3) % 360; // 每次增加 0.3 并保持 0-359 之间
        const color1 = `hsl(${hue}, 80%, 60%)`; // 主颜色
        const color2 = `hsl(${(hue + 120) % 360}, 80%, 60%)`; // 偏移 120 度的辅颜色
        document.body.style.background = // 设置渐变背景
            `linear-gradient(45deg, ${color1}, ${color2})`;
        requestAnimationFrame(updateBackground); // 循环更新
    }

    // 计时器相关
    const startDate = new Date('2022-05-02T00:00:00'); // 起始时间
    function updateTimer() {
        const now = new Date();
        const diff = now - startDate; // 计算时间差（毫秒）

        // 计算各个时间单位
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // 更新 DOM 显示（补零处理）
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // 初始化函数
    function init() {
        createRandomBlocks(); // 创建初始方块
        setInterval(updateTimer, 1000); // 启动计时器（每秒更新）
        updateTimer(); // 立即更新一次
        updateBackground(); // 启动背景动画

        // 鼠标移动交互
        document.addEventListener('mousemove', (e) => {
            const blocks = document.querySelectorAll('.deco-block');
            blocks.forEach(block => {
                const rect = block.getBoundingClientRect();
                // 计算鼠标相对于方块的位置
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                // 根据鼠标位置进行 3D 旋转和缩放
                block.style.transform = `
                    rotate3d(${y/100}, ${x/100}, 0, 45deg)
                    scale(${Math.random() * 0.1 + 0.7})
                `;
            });
        });
    }

    init(); // 执行初始化
});