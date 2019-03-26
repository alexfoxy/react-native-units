
# react-native-units


## Available Units

React Native uses *density-independent pixels*, or *dp*, as it's default unit. The appearance of this on different devices will be roughly the same physical size. 

### vw(x=1)
% of the screen width, e.g. `vw(10)` is equal to `10%` of the screens width

### vh(x=1)
% of the screen height, e.g. `vh(10)` is equal to `10%` of the screens height

### px(x=1)
Physical pixels based on device pixel ratio, e.g. `px(1)` is equal to `1 pixel` on the device, handy for very thin lines!

### su(x=1)
Scaled unit, e.g. if `scale=0.5` then `su(20)` is equal to `10dp`. You can set the scale using `RNU.setScale(scale)`. This is useful for scaling fonts and layouts depending on the device e.g.

```
if(iPad) RNU.setScale(0.75)
if(iPhone5) RNU.setScale(1.5)
```

## Simple Grid

This is a simple way to create a grid. First set up your grid:

```javascript
RNU.setGrid({
	cols: 16,
	padding: 20,
	spacing: 10
})
```

### gr(x=1)
Physical pixels based on device pixel ratio, e.g. `gr(4)` 

### gs(x=1)
The grid spacing. In this example `gs()` is equal to `10dp`

### gp(x=1)
The grid spacing. In this example `gp()` is equal to `20dp`



## Screen Rotation
As this library depends on the screen rotation you need to tie in 
```javascript
<View onLayout={() => { RNU.update() }>
	...
</View>
```



