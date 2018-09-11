# throttle-typescript

## Install
You can install via npm or yarn.

### npm
```bash
npm install --save throttle-typescript
```

### yarn
```bash
yarn add throttle-typescript
```

## Usage
You can import using ES6 imports. If you are using typescript this package includes a typings file.
```typescript
import { throttle } from 'throttle-typescript';
```

The throttle helper takes two parameters, a function you want to throttle, and a limit (milliseconds). It will return a throttled version of that function that can be used as shown below:

```javascript
function myFunction() {
	// Do the thing
}

window.addEventListener('resize', throttle(myFunction, 100));
```
