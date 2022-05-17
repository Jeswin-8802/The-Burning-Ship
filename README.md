# The-Burning-Ship
A variation of the Mandelbrot fractal, the pattern it creates is such that it resembles a buning ship.

# Description
The equation for the mandelbrot fractal is as follows
> f(z) = z <sup>2</sup> + c <br>
> where, `z` and `c` are complex numbers

The only change we make here is to `z` by taking it's absolute value 
> f(z) = | z | <sup>2</sup> + c

Such a small change is enought to change the pattern entirely from that of a bean(Mandelbrot) to what it is now.

We plot points on the screen such that the function above is recursively iterated to see that it does not diverge to infinity. The boundary that demarcates this diversion is a parameter that must be set so that we can stop iterating once it crosses it and is effectively the cicumference of a cirle drawn from the center of the pattern. Here, we are setting it to 
