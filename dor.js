document.open();
document.write(`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>HACKED BY XFELLOID</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Body and background */
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: black;
            font-family: 'Orbitron', sans-serif;
            color: #00ff00;
            user-select: none;
            position: relative;
        }

        /* Enhanced error background animation - more intense */
        #bg-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            overflow: hidden;
            z-index: 0;
            background: black;
        }
        .bg-error {
            position: absolute;
            font-size: 1.5rem;
            font-weight: 700;
            opacity: 0.2;
            white-space: nowrap;
            animation-timing-function: linear;
            text-shadow:
                0 0 5px #ff0000,
                0 0 10px #ff0000,
                0 0 15px #00ff00,
                0 0 20px #0000ff,
                0 0 30px #ff00ff; /* Added magenta for more error feel */
            filter: hue-rotate(0deg);
        }
        @keyframes floatUp {
            0% {
                transform: translateY(120vh) rotate(0deg) scale(1);
                opacity: 0.2;
                filter: hue-rotate(0deg);
            }
            25% {
                opacity: 0.4;
                filter: hue-rotate(90deg);
            }
            50% {
                opacity: 0.3;
                filter: hue-rotate(180deg);
                transform: translateY(60vh) rotate(180deg) scale(1.1);
            }
            75% {
                opacity: 0.5;
                filter: hue-rotate(270deg);
            }
            100% {
                transform: translateY(-30vh) rotate(360deg) scale(0.9);
                opacity: 0.2;
                filter: hue-rotate(360deg);
            }
        }
        @keyframes glitchBg {
            0% { transform: skew(0deg); }
            25% { transform: skew(1deg); }
            50% { transform: skew(-1deg); }
            75% { transform: skew(0.5deg); }
            100% { transform: skew(0deg); }
        }
        .glitch-part {
            animation: glitchBg 2s infinite linear;
        }

        /* Additional error overlays */
        .error-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255, 0, 0, 0.05) 10px,
                rgba(255, 0, 0, 0.05) 20px
            );
            animation: scanlines 3s linear infinite;
            z-index: 1;
            pointer-events: none;
        }
        @keyframes scanlines {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
        }

        /* Mobile responsiveness - primary for phones */
        @media (max-width: 768px) {
            .warning {
                padding: 2rem 2.5rem !important;
                max-width: 95vw !important;
                min-width: 300px !important;
            }
            .warning-text {
                font-size: 3rem !important;
                letter-spacing: 0.2em !important;
            }
            .critical-error {
                font-size: 1.5rem !important;
                letter-spacing: 0.1em !important;
            }
            .btn-ok {
                font-size: 1.2rem !important;
                padding: 0.8rem 2.5rem !important;
            }
            #hacked {
                padding: 2rem 3rem !important;
                max-width: 95vw !important;
                min-width: 300px !important;
            }
            #hacked .title {
                font-size: 2.5rem !important;
                letter-spacing: 0.25em !important;
            }
            #hacked img {
                max-width: 180px !important;
                width: 180px !important;
                margin: 0 auto !important; /* More centered */
            }
            #hacked .xfelloid-name {
                font-size: 2rem !important;
                letter-spacing: 0.2em !important;
            }
            #hacked .message {
                font-size: 1.2rem !important;
                letter-spacing: 0.02em !important;
                max-width: 100% !important;
                margin-top: 1rem !important;
            }
            #hacked .hashtag {
                font-size: 1.8rem !important;
                letter-spacing: 0.15em !important;
            }
            .bg-error {
                font-size: 1.2rem !important;
            }
        }

        /* Very small screens like old phones */
        @media (max-width: 480px) {
            .warning {
                padding: 1.5rem 2rem !important;
                max-width: 98vw !important;
                min-width: 250px !important;
            }
            .warning-text {
                font-size: 2.5rem !important;
                letter-spacing: 0.15em !important;
            }
            .critical-error {
                font-size: 1.2rem !important;
            }
            .btn-ok {
                font-size: 1rem !important;
                padding: 0.6rem 2rem !important;
            }
            #hacked {
                padding: 1.5rem 2rem !important;
                max-width: 98vw !important;
                min-width: 250px !important;
            }
            #hacked .title {
                font-size: 2rem !important;
                letter-spacing: 0.15em !important;
            }
            #hacked img {
                max-width: 140px !important;
                width: 140px !important;
                margin: 0 auto !important; /* Even more centered */
                display: block !important; /* Block for centering */
            }
            #hacked .xfelloid-name {
                font-size: 1.5rem !important;
                letter-spacing: 0.1em !important;
                margin-top: 0.8rem !important;
            }
            #hacked .message {
                font-size: 0.9rem !important;
                margin-top: 1rem !important;
            }
            #hacked .hashtag {
                font-size: 1.3rem !important;
                letter-spacing: 0.08em !important;
            }
            .bg-error {
                font-size: 0.9rem !important;
            }
        }

        /* Warning container - wider on larger screens */
        .warning {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
            text-align: center;
            background: #0a0a0a;
            border: 4px solid #ff0000;
            border-radius: 20px;
            padding: 4rem 6rem;
            box-shadow:
                0 0 25px #ff0000,
                inset 0 0 40px #ff0000;
            user-select: none;
            max-width: 95vw;
            min-width: 500px;
        }

        /* Warning text */
        .warning-text {
            font-size: 5rem;
            font-weight: 900;
            color: #ff0000;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            position: relative;
            animation: glitch 1.5s infinite;
            margin-bottom: 1.5rem;
            user-select: none;
            white-space: nowrap;
        }
        .warning-text::before,
        .warning-text::after {
            content: attr(data-text);
            position: absolute;
            left: 0;
            right: 0;
            user-select: none;
        }
        .warning-text::before {
            animation: glitchTop 1.5s infinite;
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            color: #ff0000;
            left: 2px;
            text-shadow: -2px 0 #ff0000;
            user-select: none;
        }
        .warning-text::after {
            animation: glitchBottom 1.5s infinite;
            clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            color: #ff0000;
            left: -2px;
            text-shadow: 2px 0 #ff0000;
            user-select: none;
        }

        @keyframes glitch {
            0% {
                transform: none;
            }
            20% {
                transform: skew(-1deg, -1deg);
            }
            40% {
                transform: skew(1deg, 1deg);
            }
            60% {
                transform: skew(-1deg, 1deg);
            }
            80% {
                transform: skew(1deg, -1deg);
            }
            100% {
                transform: none;
            }
        }
        @keyframes glitchTop {
            0% {
                transform: translate(0);
            }
            20% {
                transform: translate(-4px, -4px);
            }
            40% {
                transform: translate(-4px, 0);
            }
            60% {
                transform: translate(0, -4px);
            }
            80% {
                transform: translate(-4px, -4px);
            }
            100% {
                transform: translate(0);
            }
        }
        @keyframes glitchBottom {
            0% {
                transform: translate(0);
            }
            20% {
                transform: translate(4px, 4px);
            }
            40% {
                transform: translate(4px, 0);
            }
            60% {
                transform: translate(0, 4px);
            }
            80% {
                transform: translate(4px, 4px);
            }
            100% {
                transform: translate(0);
            }
        }

        /* Critical error text */
        .critical-error {
            color: #ff0000;
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            margin-bottom: 3rem;
            text-shadow:
                0 0 8px #ff0000,
                0 0 15px #ff0000;
            user-select: none;
        }

        /* Button */
        .btn-ok {
            background: #ff0000;
            color: black;
            font-weight: 700;
            font-size: 1.8rem;
            padding: 1rem 4rem;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            box-shadow:
                0 0 15px #ff0000,
                inset 0 0 25px #ff0000;
            transition: all 0.3s ease;
            user-select: none;
        }
        .btn-ok:hover {
            background: #cc0000;
            box-shadow:
                0 0 25px #ff0000,
                inset 0 0 35px #cc0000;
            transform: scale(1.1);
        }

        /* Hacked screen - wider on larger, adjusted for mobile */
        #hacked {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 20;
            text-align: center;
            background: #000000ee;
            border: 4px solid #ff0000;
            border-radius: 20px;
            padding: 4rem 7rem;
            box-shadow:
                0 0 40px #ff0000,
                inset 0 0 50px #ff0000;
            max-width: 95vw;
            min-width: 600px;
            user-select: none;
        }
        #hacked .title {
            color: #ff0000;
            font-size: 4rem;
            font-weight: 900;
            letter-spacing: 0.4em;
            margin-bottom: 2rem;
            text-shadow:
                0 0 15px #ff0000,
                0 0 25px #ff0000;
            white-space: nowrap;
        }
        #hacked .image-container {
            position: relative;
            margin: 2rem 0 0 0; /* Reduced margin for more centering */
        }
        #hacked img {
            max-width: 350px;
            width: 100%;
            border: 4px solid #ff0000;
            border-radius: 50%;
            box-shadow:
                0 0 25px #ff0000,
                inset 0 0 30px #ff0000;
            user-select: none;
            margin: 0 auto; /* Centered */
            display: block;
        }
        #hacked .xfelloid-name {
            color: #ff0000;
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            margin-top: 1rem;
            text-shadow:
                0 0 10px #ff0000,
                0 0 15px #ff0000;
        }
        #hacked .message {
            color: white;
            font-size: 1.8rem;
            margin-top: 2rem; /* More space after image */
            line-height: 1.5;
            user-select: none;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        #hacked .hashtag {
            color: #ff0000;
            font-size: 3rem;
            font-weight: 900;
            letter-spacing: 0.3em;
            margin-top: 1.5rem;
            text-shadow:
                0 0 15px #ff0000,
                0 0 25px #ff0000;
            user-select: none;
        }
    </style>
</head>
<body>
    <!-- Enhanced error background -->
    <div id="bg-container"></div>
    <div class="error-overlay"></div>

    <!-- Warning Screen -->
    <div id="warning" class="warning" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="warning-text" data-text="WARNING">WARNING</div>
        <div class="critical-error">CRITICAL EROR</div>
        <button class="btn-ok" aria-label="OK button to proceed" onclick="showHacked()">OK</button>
    </div>

    <!-- Hacked Screen -->
    <div id="hacked" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="title">HACKED BY</div>
        <div class="image-container">
            <img src="https://g.top4top.io/p_354837tfr1.jpg" alt="404" />
            <div class="xfelloid-name">XFELLOID</div>
        </div>
        <div class="message">Your system is very weak, please fix it because where there is a gap, there is me :)</div>
        <div class="hashtag">#LOLSYSTEM</div>
    </div>

    <script>
        // Enhanced background error text animation - more errors, more chaos
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00'];
        const errors = ['eror', 'syntax eror', 'fatal eror', 'kernel panic', 'system crash', 'memory fault', 'stack overflow', 'access denied'];
        const container = document.getElementById('bg-container');
        let numErrors = 80; // Increased for more error feel

        function adjustForDevice() {
            const isMobile = window.innerWidth <= 768;
            const isSmallMobile = window.innerWidth <= 480;
            numErrors = isSmallMobile ? 30 : (isMobile ? 50 : 80);

            // Clear existing
            container.innerHTML = '';

            for (let i = 0; i < numErrors; i++) {
                const div = document.createElement('div');
                div.className = 'bg-error';
                if (i % 5 === 0) div.classList.add('glitch-part'); // Add glitch to some
                div.textContent = errors[Math.floor(Math.random() * errors.length)];
                div.style.left = Math.random() * 100 + 'vw';
                div.style.top = Math.random() * 100 + 'vh';
                div.style.color = colors[Math.floor(Math.random() * colors.length)];
                div.style.fontSize = (isSmallMobile ? (8 + Math.random() * 12) : (isMobile ? (10 + Math.random() * 15) : (14 + Math.random() * 20))) + 'px';
                div.style.animationDuration = (3 + Math.random() * 7) + 's';
                div.style.animationDelay = (Math.random() * 7) + 's';
                div.style.animationName = 'floatUp';
                container.appendChild(div);
            }
        }

        window.addEventListener('resize', adjustForDevice);
        adjustForDevice();

        function showHacked() {
            document.getElementById('warning').style.display = 'none';
            document.getElementById('hacked').style.display = 'block';
        }
    </script>
</body>
</html>`);
document.close();