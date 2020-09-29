# Simple-Splitting
A simple JavaScript script to split text into elements and animate it seperatly.
Animations are handled via CSS so they are very customizable.

# Installation
Just download the script (Use .min file for faster page loading times) or copy the script tag below to load it from a CDN

## Normal
```javascript
// Normal
<script src="https://cdn.jsdelivr.net/gh/iotacb/simple-splitting/simple-splitting.js"></script>
// Minified
<script src="https://cdn.jsdelivr.net/gh/iotacb/simple-splitting/simple-splitting-min.js"></script>
```

# How to use
To use the script just add the script tag to your `.html` file.
Be aware of adding it to the bottom of the html file or use the `defer` atrribute in the script tag

```javascript
<script defer src="https://cdn.jsdelivr.net/gh/iotacb/simple-splitting/simple-splitting-min.js"></script>
```

Then just add the `ss-target` attribute to the text that should be splitted and you're already done.
If you want to modify the way it gets splitted or how it gets animated just look below to see all the setting attributes.

# Settings
**ss-target**
- Tells the script that elements with this attribute should be splitted

**ss-delay="50"**
- The delay after which time classes of the splitted elements should be changed (Default is 50ms)

**ss-type="letter"**
- Tells the script how to split the text
  * **letter** Splitts the text at each letter
  * **word** Splitts the text at each word
  * Custom types can just be written here e.g.: ``abc`` -> will be split at each abc

**ss-default="ss-transparent"**
- The default class that each splitted element has after it got splitted
- Add your own class to make custom animations

**ss-class="ss-opacity"**
- The class the splitted element will receive after the delay has passed
- Add your own class to make custom animations
