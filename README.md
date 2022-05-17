# The-Burning-Ship
A variation of the Mandelbrot fractal, it creates a fractal pattern that resembles a buning ship.

# Description
The equation for the mandelbrot fractal is as follows
> f(z) = z <sup>2</sup> + c <br>
> where, `z` and `c` are complex numbers

The only change we make here is to `z` by taking it's absolute value 
> f(z) = | z | <sup>2</sup> + c

Such a small change is enought to change the pattern entirely from that of a bean(Mandelbrot) to what it is now.

We plot points on the screen such that the function above is recursively iterated to see that it does not diverge to infinity. The boundary that demarcates this diversion is a parameter that must be set so that we can stop iterating once it crosses it and is effectively the cicumference of a cirle drawn from the center of the pattern. Here, we are setting it to `16`.

#

![Screenshot 2022-05-17 201955](https://user-images.githubusercontent.com/84562594/168841375-59326796-903c-4033-af7f-403fef7f5868.png)

![Screenshot 2022-05-17 202854](https://user-images.githubusercontent.com/84562594/168843029-3220fc59-4296-4cd6-8977-53a6dc7746ff.png)

![Screenshot 2022-05-17 202210](https://user-images.githubusercontent.com/84562594/168841435-79c4c266-d331-4d92-8277-73e64ceba5c6.png)
<br><br><br>
# Controls

`Left Click` to zoom in

`Right Click` to zoom out

# References

* https://en.wikipedia.org/wiki/Burning_Ship_fractal
* http://www.paulbourke.net/fractals/burnship/
* https://softologyblog.wordpress.com/2017/02/24/the-burning-ship-fractal/
