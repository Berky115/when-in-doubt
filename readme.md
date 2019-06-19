# JS

## General
- Wonderful book : https://livebook.manning.com/#!/book/secrets-of-the-javascript-ninja-second-edition
- esLint - configuration : https://eslint.org/docs/user-guide/configuring#configuring-rules
- Instance vs prototype : https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/
- Prototyping example : https://livebook.manning.com/#!/book/secrets-of-the-javascript-ninja-second-edition/chapter-7/36
- es6 cheatsheet: https://github.com/azat-co/cheatsheets/tree/master/es6

### Lodash 
- All purpose reminder : https://devhints.io/lodash 
- Useful functions : https://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting 
- Docs : https://lodash.com/docs/4.17.11 
- Implementation ref : https://youmightnotneed.com/lodash/ 

### D3
- SVG / D3 render guide : https://www.dashingd3js.com/svg-basic-shapes-and-d3js
- Reasons to use : https://medium.com/@mbostock/why-you-should-use-d3-ae63c276e958

### React
- Pure component vs stateless : https://medium.com/groww-engineering/stateless-component-vs-pure-component-d2af88a1200b

### RegEx
- JS specific cheatsheet : https://www.debuggex.com/cheatsheet/regex/javascript
- Practical introduction : https://eloquentjavascript.net/09_regexp.html
- RegEx testing playground : https://regex101.com/#javascript
## Testing

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

# GIT

## General
- Push new repo : https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line 
- Command reference : https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf
- detailed reference : https://www.git-tower.com/blog/git-cheat-sheet

# Python
- Mosh basics page: https://programmingwithmosh.com/python/python-3-cheat-sheet/
- General reference page: https://www.pythonsheets.com/
- Standards page : https://www.pythonsheets.com/notes/python-code-style.html
- Twitter Bot project : https://www.digitalocean.com/community/tutorials/how-to-create-a-twitterbot-with-python-3-and-the-tweepy-library


# CSS 
- Grid Garden Game : https://cssgridgarden.com/
- Reference page : https://devhints.io/css
- Flexbox guide : https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Flex Zombies Game : https://mastery.games/p/flexbox-zombies

# Asp.net
## General
- Get started! : https://docs.microsoft.com/en-us/visualstudio/ide/quickstart-aspnet-core?view=vs-2019

# WebDev
## General
- 12 Factor app : https://12factor.net/
- Short: How does a browser work? : https://wsvincent.com/what-happens-when-url/
- Long: How does a browser work? : https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a
### Short version:
```
You enter a URL into a web browser. 

1 type desired url
2 convert to IP
3 check caches/ lookup DNS query if necessary
4 Handshake established
5 Send request (Get)
6: Server translates request and builds response
7: Server sends response with page and status code
8: Browser buils page based on html blueprint. Then reads in associated CSS/Javascript
```

## Fun Facts
skeuomorphic - where an object in software mimics its real world counterpart. The “trash can” is, perhaps, the most recognizable skeuomorphic object.

