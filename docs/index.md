---
extra_css:
  - stylesheets/extra.css
extra_javascript:
  - scripts/extra.js
template: custom_page.html  # 关键：指向独立模板
---
<header class="md-header" data-md-component="header"></header>
<div class="container" id="mainContainer">
    <div class="timer-container">
        <div class="timer">
            <div class="time-unit" style="background: var(--accent-yellow)">
                <div class="time-number" id="days">0</div>
                <div class="time-label">Days</div>
            </div>
            <div class="time-unit" style="background: var(--accent-red)">
                <div class="time-number" id="hours">0</div>
                <div class="time-label">Hours</div>
            </div>
            <div class="time-unit" style="background: var(--accent-blue)">
                <div class="time-number" id="minutes">0</div>
                <div class="time-label">Minutes</div>
            </div>
            <div class="time-unit" style="background: var(--white)">
                <div class="time-number" id="seconds">0</div>
                <div class="time-label">Seconds</div>
            </div>
        </div>
    </div>
    <div>
        <button class="add-btn">+ Goooo</button>
    </div>
    <div class="timeline">
        <div class="timeline-item">
            <div class="timeline-date">2023-01-01</div>
            <div class="timeline-content">0819</div>
        </div>
    </div>
</div>
