When in doubt list

## JS:

## General:

## Lodash: 
- https://devhints.io/lodash (Excellent all purpose reminder)
- https://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting (10 useful functions)
- https://lodash.com/docs/4.17.11 (docs)
- https://youmightnotneed.com/lodash/ (Ref for how these utils work/ alternative implementations)

## Testing:

### Mocha - https://mochajs.org/
```
const assert = require('assert');
describe('Array', function() {
	describe('#indexOf()', function() {
	it('should return -1 when the value is not present', function(){
	  assert.equal(-1, [1,2,3].indexOf(4));
	});
});
});
```

### Express - The little server that could:

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```


## GIT: 
Push new repo - https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line 

## Prototyping:
	- Manning book with simple example : https://livebook.manning.com/#!/book/secrets-of-the-javascript-ninja-second-edition/chapter-7/36
	- (Instance vs prototype) - https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/


# asp.net:
## General
- Get started! - https://docs.microsoft.com/en-us/visualstudio/ide/quickstart-aspnet-core?view=vs-2019

