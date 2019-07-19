# JS

## General
- Wonderful book : https://livebook.manning.com/#!/book/secrets-of-the-javascript-ninja-second-edition
- esLint - configuration : https://eslint.org/docs/user-guide/configuring#configuring-rules
- Instance vs prototype : https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/
- Prototyping example : https://livebook.manning.com/#!/book/secrets-of-the-javascript-ninja-second-edition/chapter-7/36
- es6 cheatsheet: https://github.com/azat-co/cheatsheets/tree/master/es6
- Excellent App Setup for MERN stack : https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/

## Stay updated:
- Latest/greatest javaScript features - https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/ECMAScript_Next_support_in_Mozilla
- Latest with React - https://reactjs.org/blog/2019/02/23/is-react-translated-yet.html

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

### Enzyle testing
Official documentation - https://airbnxb.io/enzyme/docs/api/ReactWrapper/find.html
General walk through and setup - https://scotch.io/tutorials/testing-react-components-with-enzyme-and-jest

```
it('Rank default values are passed on and rendered', () => {
    const wrapper = mount(<GameUI/>);
    expect(wrapper.find('.currentPoints').text()).toEqual('Points: 0');
    expect(wrapper.find('.currentRank').text()).toEqual('Rank: 1');
    expect(wrapper.find('.curretRankPoints').text()).toEqual('Rankpoints: 7');
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
- Virtual env cheat sheet - https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/26/python-virtual-env/

# Ruby
- Ruby Gems cheat sheet - https://medium.com/cedarcode/updating-gems-cheat-sheet-346d5666a181

# EZProxy
Proxy cheat sheet - https://help.oclc.org/Library_Management/EZproxy/Get_started/Evaluate_proxy_by_port_versus_proxy_by_hostname

Terminology - https://help.oclc.org/Library_Management/EZproxy/EZproxy_configuration/Understanding_URLs_and_database_stanzas

Stanzas - https://help.oclc.org/Library_Management/EZproxy/EZproxy_configuration/Introduction_to_database_stanza_directives

Bundler cheat codes
```
bundle install #install all gems

bundle update #update all gems to latest possible version. This ignores gemfile.lock, very possibly that it causes issues.

bundle init #non-rails way to init a gemFile

gem install bundler -v "~>1.0"  #If you NEED a version of bundler that is older use this...

```

# CSS 
- Grid Garden Game : https://cssgridgarden.com/
- Reference page : https://devhints.io/css
- Flexbox guide : https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Flex Zombies Game : https://mastery.games/p/flexbox-zombies

## Web templates
[html5Up](https://html5up.net/) 
[w3 schools](https://www.w3schools.com/w3css/w3css_templates.asp?source=post_page---------------------------)

# Asp.net
## General
- Get started! : https://docs.microsoft.com/en-us/visualstudio/ide/quickstart-aspnet-core?view=vs-2019

# Terminal
User-Agent setup - https://dev.to/levivm/how-to-use-ssh-and-ssh-agent-forwarding-more-secure-ssh-2c32
shell commands - https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/

Useful commands to memorize:

```
Ctrl + A	#Go to the beginning of the line you're currently typing on
Ctrl + E	#Go to the end of the line you're currently typing on
Ctrl + U	#Clear the line before the cursor

Ctrl + D	#Exit the current shell

end task on port #kill -kill `lsof -t -i tcp:3000`
```




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

## VScode
VSCode settings - https://code.visualstudio.com/docs/getstarted/settings

