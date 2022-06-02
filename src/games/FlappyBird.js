import React, { useEffect, useRef, useState } from 'react';
import './css/FlappyBird.css'

function FlappyBird() {

  const pipeCount = 3;

  const canvas = useRef();
  const ctxRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const gameStartedRef = useRef();
  
  const [count, setCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [pipes, setPipes] = useState([]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const onKeyDown = (e) => {
    console.log("-ad-");
    if (!gameStartedRef.current) return;

    bird.flap();
  }

  const bird = {
    x: 150,
    y: 200,
    speed: 0,
    radius: 20,
    gravity: 0.4,
    flapForce: -7,
  
    checkOverlap(X1, Y1, X2, Y2) {
      let Xn = Math.max(X1, Math.min(this.x, X2));
      let Yn = Math.max(Y1, Math.min(this.y, Y2));
      let Dx = Xn - this.x;
      let Dy = Yn - this.y;
      return (Dx * Dx + Dy * Dy) <= this.radius * this.radius;
    },
    flap() {
      this.speed = this.flapForce;
    },
    update() {
      if (this.y >= screenHeight || this.y <= 0) {
        stopGame();
        return;
      }
      this.speed += this.gravity;
      this.y += this.speed;
    },
    draw() {
      ctxRef.current.beginPath();
      ctxRef.current.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctxRef.current.fillStyle = '#ffd60a';
      ctxRef.current.fill();
    }
  };

  const loop = (time) => {
    if (previousTimeRef.current) {
      const deltaTime = time - previousTimeRef.current;
      
      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount(prevCount => (prevCount + deltaTime * 0.00101));
      
      ctxRef.current.clearRect(0, 0, screenWidth, screenHeight);

      bird.update();
      bird.draw();

      for (let i = 0; i < pipeCount; i++) {
        pipes[i].draw();
        pipes[i].update();
    
        const upperLowerPipe = pipes[i].getPipes();

        const upperPipe = upperLowerPipe[0];
        const lowerPipe = upperLowerPipe[1];

        if (bird.checkOverlap(upperPipe.x1, upperPipe.y1, upperPipe.x2, upperPipe.y2) ||
          bird.checkOverlap(lowerPipe.x1, lowerPipe.y1, lowerPipe.x2, lowerPipe.y2)) {
          stopGame();
          return;
        }
      }   
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(loop);
  }

  useEffect(() => {
    ctxRef.current = canvas.current.getContext('2d'); 
    gameStartedRef.current = false;
    setScreenWidth(canvas.current.clientWidth);
    setScreenHeight(canvas.current.clientHeight);

    const _pipes = [];
    for (let i = 0; i < pipeCount; i++) {
      _pipes.push({
        x: canvas.current.clientWidth + i * (canvas.current.clientWidth + 50) / pipeCount,
        width: 50,
        holeHeight: 150,
        level: getRandomInt(1, 7),
        speed: -3,
        draw() {
          const heights = this.getPipeHeights();
          
          ctxRef.current.fillRect(this.x, 0, this.width, heights[0]);
          ctxRef.current.fillRect(this.x, canvas.current.clientHeight - heights[1], this.width, heights[1]);
        },
        update() {
          this.x += this.speed;
          if (this.x < -this.width) {
            this.x = canvas.current.clientWidth;
            this.level = getRandomInt(1, 7);
          }
        },
        getPipeHeights() {
          return [
            100 + 40 * this.level,
            canvas.current.clientHeight - (100 + 40 * this.level + this.holeHeight)
          ];
        },
        getPipes() {
          return [{
              x1: this.x,
              y1: 0,
              x2: this.x + this.width,
              y2: this.getPipeHeights()[0]
            },
            {
              x1: this.x,
              y1: 640 - this.getPipeHeights()[1],
              x2: this.x + this.width,
              y2: 640
            }
          ];
        }
      });
    }

    setPipes(_pipes);
    bird.draw();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      cancelAnimationFrame(requestRef.current); 
    }; 
  }, []);

  const startGame = (e) => {
    if (gameStartedRef.current) return;
      gameStartedRef.current = true;
      requestRef.current = requestAnimationFrame(loop);
      document.addEventListener('keydown', onKeyDown);
      bird.flap();
  };

  const stopGame = () => {
    cancelAnimationFrame(requestRef.current);
    requestRef.current = undefined;
    document.removeEventListener('keydown', onKeyDown);
    gameStartedRef.current = false;
  };

  return (
    <div className='flappy-bird'>
      <h1>Flappy Bird!</h1>
      <h1>{Math.round(count)}</h1>
      <canvas ref={canvas} id="myCanvas" width="480" height="640"></canvas>
      <button onClick={startGame}>Start</button>
    </div>
  );
}

export default FlappyBird;
