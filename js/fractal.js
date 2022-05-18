window.onload = function() {

    var canvas = document.getElementById("viewport") 
    var context = canvas.getContext("2d")
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    var width = canvas.width
    var height = canvas.height
    var imagedata = context.createImageData(width, height)
 
    var max = 100

    var z = 2.5
    var offset_x = -0.5
    var offset_y = -0.5
    var panx = 0
    var pany = 0

    function init() {
        canvas.addEventListener("mousedown", onMouseDown)
        generateImage()
        main(0)
    }
    
    // Main loop
    function main(tframe) {
        // Request animation frames
        window.requestAnimationFrame(main)
        
        // Draw the generate image
        context.putImageData(imagedata, 0, 0)
    }

    function generateImage() {
        offset_x = offset_x + panx*z/(height)
        offset_y = offset_y - pany*z/(height)
        for (let y = 0; y <= height; y++) {
            for (let x = 0; x < width; x++) {
                generateFractal(x, y, max)
            }
        }
    }

    function generateFractal(x, y, max) {
        var i
        var zr = 0
        var zi = 0
        var a = 0
        var b = 0

        var cr = x * z / height
        cr = offset_x + cr - z / 2 * width / height
        var ci = y * z / height
        ci = offset_y + z / 2 - ci

        var color

        for(i = 0; i < max; i++) {
            zr = a * a - b * b + cr
            zi = Math.abs(2 * a * b) + ci
            a = zr
            b = zi
            if(a * a + b * b >= 16) 
                break
        }
        let mu = i + 1 - Math.log(Math.log(a * a + b * b)) / Math.log(2)
        if (mu < 0)
            mu = 0
        else if (mu > max || isNaN(mu))
            mu = 11 * max / 12
        color = pallete[255 - Math.floor((mu) * 255 / max)]

        var pixelindex = ((height - y) * width + x) * 4
        imagedata.data[pixelindex] = color[0]
        imagedata.data[pixelindex + 1] = color[1]
        imagedata.data[pixelindex + 2] = color[2]
        imagedata.data[pixelindex + 3] = 255
    }

    function onMouseDown(e) {
        var pos = getMousePos(canvas, e) 
        panx = pos.x - width / 2
        pany = (height - pos.y) - height / 2
        if (e.which == 3)
            z = 81 * z / 49
        z = 7 * z / 9
        generateImage()
    }

    function getMousePos(canvas, e) {
        var rect = canvas.getBoundingClientRect()
        return {
            x: Math.round((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
            y: Math.round((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
        }
    }

    init()
}

// http://jdherman.github.io/colormap/ 👇
var pallete = [
    [255,255,255],
    [255,255,254],
    [255,255,252],
    [255,255,250],
    [255,255,248],
    [255,255,246],
    [255,255,244],
    [255,255,242],
    [255,255,240],
    [255,255,238],
    [255,255,236],
    [255,255,234],
    [255,255,232],
    [255,255,230],
    [255,255,228],
    [255,255,226],
    [255,255,224],
    [255,255,222],
    [255,255,220],
    [255,255,218],
    [255,255,216],
    [255,255,214],
    [255,255,212],
    [255,255,210],
    [255,255,208],
    [255,255,206],
    [255,255,204],
    [255,255,202],
    [255,255,200],
    [255,255,198],
    [255,255,196],
    [255,255,194],
    [255,255,192],
    [255,255,190],
    [255,255,188],
    [255,255,186],
    [255,255,184],
    [255,255,182],
    [255,255,180],
    [255,255,178],
    [255,255,176],
    [255,255,174],
    [255,255,172],
    [255,255,170],
    [255,255,168],
    [255,255,166],
    [255,255,164],
    [255,255,162],
    [255,255,160],
    [255,255,158],
    [255,255,156],
    [255,255,154],
    [255,255,152],
    [255,255,150],
    [255,255,148],
    [255,255,146],
    [255,255,144],
    [255,255,142],
    [255,255,140],
    [255,255,138],
    [255,255,136],
    [255,255,134],
    [255,255,132],
    [255,255,130],
    [255,255,128],
    [255,253,126],
    [255,251,124],
    [255,249,122],
    [255,247,120],
    [255,245,118],
    [255,243,116],
    [255,241,114],
    [255,239,112],
    [255,237,111],
    [255,235,109],
    [255,233,107],
    [255,231,105],
    [255,229,103],
    [255,227,101],
    [255,225,99],
    [255,222,97],
    [255,220,95],
    [255,218,93],
    [255,216,91],
    [255,214,89],
    [255,212,88],
    [255,210,86],
    [255,208,84],
    [255,206,82],
    [255,204,80],
    [255,202,78],
    [255,200,76],
    [255,198,74],
    [255,196,72],
    [255,194,70],
    [255,192,68],
    [255,190,67],
    [255,188,65],
    [255,186,63],
    [255,184,61],
    [255,182,59],
    [255,179,57],
    [255,177,55],
    [255,175,53],
    [255,173,51],
    [255,171,49],
    [255,169,47],
    [255,167,45],
    [255,165,44],
    [255,163,42],
    [255,161,40],
    [255,159,38],
    [255,157,36],
    [255,155,34],
    [255,153,32],
    [255,151,30],
    [255,149,28],
    [255,147,26],
    [255,145,24],
    [255,143,22],
    [255,141,21],
    [255,138,19],
    [255,136,17],
    [255,134,15],
    [255,132,13],
    [255,130,11],
    [255,128,9],
    [255,126,7],
    [255,125,6],
    [255,124,6],
    [255,123,6],
    [255,122,6],
    [255,121,6],
    [255,120,6],
    [255,119,6],
    [255,118,6],
    [255,117,6],
    [255,116,6],
    [255,115,6],
    [255,114,6],
    [255,113,6],
    [255,112,6],
    [255,111,6],
    [255,110,6],
    [255,109,6],
    [255,108,6],
    [255,107,6],
    [255,106,6],
    [255,105,6],
    [255,104,6],
    [255,103,6],
    [255,102,6],
    [255,101,6],
    [255,100,6],
    [255,99,6],
    [255,98,6],
    [255,97,6],
    [255,96,6],
    [255,94,6],
    [255,93,6],
    [255,92,6],
    [255,91,6],
    [255,90,6],
    [255,89,6],
    [255,88,6],
    [255,87,6],
    [255,86,6],
    [255,85,6],
    [255,84,6],
    [255,83,6],
    [255,82,6],
    [255,81,6],
    [255,80,6],
    [255,79,6],
    [255,78,6],
    [255,77,6],
    [255,76,6],
    [255,75,6],
    [255,74,6],
    [255,73,6],
    [255,72,6],
    [255,71,6],
    [255,70,6],
    [255,69,6],
    [255,68,6],
    [255,67,6],
    [255,66,6],
    [255,65,6],
    [255,64,6],
    [255,63,6],
    [255,62,6],
    [255,61,6],
    [253,60,6],
    [249,60,6],
    [245,59,6],
    [241,58,6],
    [238,57,6],
    [234,57,6],
    [230,56,6],
    [226,55,6],
    [222,54,6],
    [219,53,6],
    [215,53,6],
    [211,52,6],
    [207,51,6],
    [203,50,6],
    [199,50,6],
    [196,49,6],
    [192,48,6],
    [188,47,6],
    [184,47,6],
    [180,46,6],
    [177,45,6],
    [173,44,6],
    [169,43,6],
    [165,43,6],
    [161,42,6],
    [157,41,6],
    [154,40,7],
    [150,40,7],
    [146,39,7],
    [142,38,7],
    [138,37,7],
    [135,36,7],
    [131,36,7],
    [127,35,7],
    [123,34,7],
    [119,33,7],
    [115,33,7],
    [112,32,7],
    [108,31,7],
    [104,30,7],
    [100,29,7],
    [96,29,7],
    [93,28,7],
    [89,27,7],
    [85,26,7],
    [81,26,7],
    [77,25,7],
    [73,24,7],
    [70,23,7],
    [66,22,7],
    [62,22,7],
    [58,21,7],
    [54,20,7],
    [51,19,7],
    [47,19,7],
    [43,18,7],
    [39,17,7],
    [35,16,7],
    [31,15,7],
    [28,15,7],
    [24,14,7],
    [20,13,7],
    [16,12,7],
    [12,12,7]
]
