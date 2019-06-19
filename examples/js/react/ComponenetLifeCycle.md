## Compoenent Lifecycle

### constructor()
- Happens when an element is created and lets you set the default properties and the initial state

### Mounting (events happen once)
- componentWillMount()—Happens before mounting to the DOM
- componentDidMount()—Happens after mounting and rendering

### Updating (events happen multiple times)
- componentWillReceiveProps(nextProps)—Happens when the component is about to receive properties
- shouldComponentUpdate(nextProps, nextState)-> bool—Lets you optimize the component’s rerendering by determining when to update and when to not update
- componentWillUpdate(nextProps, nextState)—Happens right before the component is updated
- componentDidUpdate(prevProps, prevState)—Happens right after the component updated

### Unmounting (events happen once)
- componentWillUnmount function()—Lets you unbind and detach any event listeners or do other cleanup work before the component is unmounted