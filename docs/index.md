

<div class="love-container">

    <!-- 计时器 -->
    <div id="timer" class="love-timer">
        <div></div>
        <div id="counter" class="counter"></div>
    </div>

    <!-- 时间轴 -->
    <div class="timeline">
        <div class="timeline-event">
            <div class="event-date">2022-05-02</div>
            <div class="event-content">第一次</div>
        </div>
        <div class="timeline-event">
            <div class="event-date">2023-05-20</div>
            <div class="event-content">第二次</div>
        </div>
        <!-- 添加更多时间节点 -->
    </div>

</div>

<style>
/* 黑白风格 CSS */
.love-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    color: #333;
}

.love-timer {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    border: 1px solid #ddd;
}

.counter {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 1rem;
    color: #000;
}

.timeline {
    position: relative;
    padding: 20px 0;
}

.timeline-event {
    display: flex;
    margin-bottom: 30px;
    position: relative;
}

.event-date {
    width: 150px;
    font-weight: bold;
    color: #666;
}

.event-content {
    flex: 1;
    padding-left: 30px;
    border-left: 2px solid #000;
    position: relative;
}

.event-content::before {
    content: "";
    position: absolute;
    left: -7px;
    top: 5px;
    width: 12px;
    height: 12px;
    background: #fff;
    border: 2px solid #000;
    border-radius: 50%;
}
</style>

<script>
// 性能优化后的计时器
let animationFrameId;
let startDate = new Date("2022-05-02"); // 纪念日时间对象只创建一次

function formatTime(num) {
    return num.toString().padStart(2, '0'); // 时间补零函数
}

function updateTimer() {
    const now = Date.now(); // 使用更高效的时间戳获取方式
    const diff = now - startDate;

    // 时间计算
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const milliseconds = diff % 1000;

    // 使用 textContent 替代 innerHTML 提升性能
    document.getElementById("counter").textContent = 
        `${days}天 ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${milliseconds.toString().padStart(3, '0')}`;

    // 使用 requestAnimationFrame 优化渲染
    animationFrameId = requestAnimationFrame(updateTimer);
}

// 启动计时器
updateTimer();

// 页面隐藏时暂停计时器（优化性能）
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
    } else {
        updateTimer();
    }
});
</script>