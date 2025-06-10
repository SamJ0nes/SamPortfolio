import { useEffect, useRef } from 'react'

// Set default spacing between dots, and the max straight line distance in pixels each dot xy can be from the mouse xy without being effected.
// All dots within max dist will be offset from original xy.
function DotCanvas({ spacing, maxDist}) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    // Store dot colors for each grid position.
    const dotColorsRef = useRef({});

    // Effect for dotted Background canvas (gridOverlay).
    useEffect(() => {
        // Declare container, canvas with context and mouse variable.
        const container = containerRef.current;
        const canvas = canvasRef.current;

        // If container or canvas arent set yet.
        if(!container || !canvas) return;

        const ctx = canvas.getContext('2d');
        let mouse = { x: 0, y: 0 };

        // Generate and store colors for each grid position
        const generateDotColors = () => {
            const colors = {};
            for (let x = 0; x < canvas.width; x += spacing) {
                for (let y = 0; y < canvas.height; y += spacing) {
                    // Use a unique key for each dot
                    const key = `${x},${y}`;
                    let r = Math.floor(Math.random() * 255);
                    let g = Math.floor(Math.random() * 255);
                    let b = Math.floor(Math.random() * 255);
                    colors[key] = `rgba(${r}, ${g}, ${b}, 0.5)`;
                }
            }
            return colors;
        };

        // Set canvas width and height to window inners.
        const resize = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            dotColorsRef.current = generateDotColors();
        };
        resize();

        // Call resize variable func whenever window event listener for resize.
        window.addEventListener('resize', resize);



        // Whenever mouse move event listener perform func and update mouse x and y to current client x and y from event 'e'.
        // Get canvas pos and size on page in pixels and save to 'rect'.
        // set mouse x and y to client x and y but take into consderation potential offsets.
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * canvas.width;
            mouse.y = ((e.clientY - rect.top) / rect.height) * canvas.height;
        }

        // Call handleMouseMove variable func whenever window event listener for resize.
        window.addEventListener('mousemove', handleMouseMove);

        // Self-reccuring const variable func that redraws all dots.
        // Core of the grid repulsion effect.
        // Loops through all points on the grid and nudges away from grid pos when the mouse is nearby.
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Create grid for dots by draw as many dots for canvas width and height, but keep a spacing of the declared const variable.
            for (let x = 0; x < canvas.width; x += spacing) {
                for (let y = 0; y < canvas.height; y += spacing) {

                    // Calc distance from current dot x and y from the mouse x and y pos.
                    const dotMouseDistanceX = x - mouse.x;
                    const dotMouseDistanceY = y - mouse.y;
                    // Use Pythagoras to calc straight line distance.
                    const straightLineDistance = Math.sqrt(dotMouseDistanceX * dotMouseDistanceX + dotMouseDistanceY * dotMouseDistanceY);

                    // Declare new offset x and y. Should be 0 by default as assume no offset.
                    let offsetX = 0;
                    let offsetY = 0;

                    // If straight line dist is less than the max dist const variable.
                    if (straightLineDistance < maxDist) {
                        // Calculates a "force" off offset push away from the mouse from 0-50. 40 is max push.
                        const forcePush = (1 - straightLineDistance / maxDist) * 50;
                        // Get the away angle from dot xy and mouse xy.
                        const angle = Math.atan2(dotMouseDistanceY, dotMouseDistanceX);
                        // Calc an offset x (cos) and y (sin) using forcePush as the multiplier.
                        offsetX = Math.cos(angle) * forcePush;
                        offsetY = Math.sin(angle) * forcePush;
                    }

                    // Begin Redraw of circle dots and set the x and y to add the offset x and y.
                    ctx.beginPath();
                    ctx.arc(x + offsetX, y + offsetY, 3, 0, Math.PI * 2);
                    // Use stored color for this dot
                    const key = `${x},${y}`;
                    ctx.fillStyle = dotColorsRef.current[key] || 'rgba(0,0,0,0.5)';
                    ctx.fill();
                }
            }

            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove)
        };
    }, [spacing, maxDist]);


    return (
        <div ref={containerRef} className='dotCanvasContainer' style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <canvas ref={canvasRef} className='gridOverlay'></canvas>
        </div>
    );
}

export default DotCanvas;