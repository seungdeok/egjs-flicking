# @egjs/react-flicking [![npm version](https://badge.fury.io/js/%40egjs%2Freact-flicking.svg)](https://badge.fury.io/js/%40egjs%2Freact-flicking)


A react component that can easily use [@egjs/flicking](https://github.com/naver/egjs-flicking)

* [API documentation for **@egjs/flicking**](https://naver.github.io/egjs-flicking/release/latest/doc/)


## Install
```
$ npm install @egjs/react-flicking --save
```

## How to use
```jsx
import Flicking from "@egjs/react-flicking";
import { Parallax, Fade, AutoPlay } from "@egjs/flicking-plugins";

<Flicking
  tag = "div"
  onFlick = {e => {}}
  onFlickEnd = {e => {}}
  onBeforeFlickStart = {e => {}}
  onBeforeRestore = {e => {}}
  onRestore = {e => {}}
  hwAccelerable = {true}
  prefix = "eg-flick"
  deceleration = {0.0006}
  horizontal = {true}
  circular = {false}
  previewPadding = {[0, 0]}
  bounce = {[10, 10]}
  threhold = {40}
  duration = {100}
  panelEffect = {x => 1 - Math.pow(1 - x, 3)}
  defaultIndex = {0}
  inputType = {["pointer", "touch", "mouse"]}
  thresholdAngle = {45}
  adaptiveHeight = {false}
  zIndex = {2000}
  useTranslate = {true}
>
  <div>panel 0</div>
  <div>panel 1</div>
  <div>panel 2</div>
</Flicking>
```


## More examples
* [Infinite Flicking](https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking/src/features/InfiniteFlicking.tsx)
* [Progress](https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking/src/features/Progress.tsx)
* [Snap](https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking/src/features/Snap.tsx)
* [Variable Size](https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking/src/features/VariableSize.tsx)
* [Flexible Align](https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking/src/features/Align.tsx)
* [Bound](https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking/src/features/Bound.tsx)
* [Gap](https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking/src/features/Gap.tsx)
* [Use Parallax Plugin](https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking/src/plugins/Parallax.tsx)
* [Use Fade Plugin](https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking/src/plugins/Fade.tsx)
* [Use AutoPlay Plugin](https://github.com/naver/egjs-flicking/tree/master/packages/react-flicking/src/plugins/AutoPlay.tsx)

## Development

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Bug Report

If you find a bug, please report it to us using the [Issues](https://github.com/naver/egjs-flicking/issues) page on GitHub.


## License
react-infinitegrid is released under the [MIT license](https://github.com/naver/egjs-flicking/blob/master/LICENSE).


```
Copyright (c) 2015-present NAVER Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```