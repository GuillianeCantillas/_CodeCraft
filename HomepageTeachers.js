            let currentFrameIndex = 0;
            let interval = 1000;
            const container = document.getElementById('pixel-art-container1');
            const frames = container.querySelectorAll(".pixel-art-frame");
            let animationInterval;
        
            function showNextFrame(frames) {
                frames[currentFrameIndex].classList.remove("active");
                currentFrameIndex = (currentFrameIndex + 1) % frames.length;
                frames[currentFrameIndex].classList.add("active");
            }
        
            function startAnimation(frames) {
                currentFrameIndex = 0;
                frames[currentFrameIndex].classList.add("active");
                animationInterval = setInterval(() => showNextFrame(frames), interval);
            }
        
                startAnimation(frames); 
           