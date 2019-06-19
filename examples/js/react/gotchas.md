//All JSX tags need a closing '/' at either the ending tag or the initial tag
<a href="http://azat.co">Azat, the master of callbacks</a>
<button label="Save" className="btn" onClick={this.handleSave}/>


//Style Attributes don't have '-'
ex:
background-image becomes backgroundImage.
font-size becomes fontSize.
font-family becomes fontFamily.

### Inline variables use {{}}
```
<input style={{fontSize: '30pt'}} />
```
### Alternatively you can use a variable
```
let smallFontSize = {fontSize: '10pt'}
<input style={smallFontSize} />
```

### Class is a reserved word. Thus when naming html classes...use className
<div className="hidden">...</div>

### Similarly, for is a reserved word. So form elemends use htmlfor...
<div>
    <input type="radio" name={this.props.name} id={this.props.id}>
    </input>
    <label htmlFor={this.props.id}>
      {this.props.label}
    </label>
</div>