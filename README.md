## upyun-sign ![NPM version](https://img.shields.io/npm/v/upyun-sign.svg?style=flat) 

A cli tool for creating upyun form `policy` and `signature` by given `form_api_secret`.

### Installation
```bash
$ [sudo] npm install -g upyun-sign
```

### CLI Useage

When using upyun-sign cli tool, `form_api_secret` must be string, and it's required.
`params` must be JSON string, it's optional. Check out Upyun's [documentation](http://docs.upyun.com/api/form_api/)

```bash
$ upyun-sign \
  --bucket=exampledemo \
  --form_api_secret=L6RkvgdjMPWiBRyU 
  --save-key=/path/to/file.ext
  --expiration=1409200758
  --allow-file-type=
  --content-length-range=
  --content-md5=
  --content-secret=
  --content-type=
  --image-width-range=
  --image-height-range=
  --notify-url=
  --return-url=
  --x-gmkerl-thumbnail=
  --x-gmkerl-type=
  --x-gmkerl-value=
  --x-gmkerl-quality=
  --x-gmkerl-unsharp=
  --x-gmkerl-rotate=
  --x-gmkerl-crop=
  --x-gmkerl-exif-switch=
  --ext-param=
```

### Example
```js
var createSignature = require('upyun-sign');

var results = createSignature({
  bucket: 'exampledemo',
  form_api_secret: 'L6RkvgdjMPWiBRyU'
});

console.log(results.policy);
console.log(results.signature);
```

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://raw.githubusercontent.com/turingou/docor/master/docor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.2.0