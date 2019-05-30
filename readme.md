# JS

## General
- Wonderful book : https://livebook.manning.com/#!/book/secrets-of-the-javascript-ninja-second-edition
- esLint - configuration : https://eslint.org/docs/user-guide/configuring#configuring-rules
- Instance vs prototype : https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/
- Prototyping example : https://livebook.manning.com/#!/book/secrets-of-the-javascript-ninja-second-edition/chapter-7/36


### Lodash 
- All purpose reminder : https://devhints.io/lodash 
- Useful functions : https://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting 
- Docs : https://lodash.com/docs/4.17.11 
- Implementation ref : https://youmightnotneed.com/lodash/ 

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
- Get started! - https://docs.microsoft.com/en-us/visualstudio/ide/quickstart-aspnet-core?view=vs-2019

