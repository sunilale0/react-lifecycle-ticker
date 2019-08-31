# REACT LIFECYCLE TICKER - First Introduction to React Lifecycle
This is the application where I got introduced to `componentDidMount()` a function of React Lifecycle that is invoked automatically when the particular component gets mounted. 

State and Lifecycle are only available in a class-based component in contrast to functional component (which btw can have similar functions using 
React Hooks(
- State Hook
- Effect Hook
)).

Hence, I realized after this lession that I had been using a component of React Lifecycle called `render()`.

## Code Snippets
```javascript
  componentDidMount() {

    this.state.setIntID = setInterval(()=>
      this.setState({
          ticker: this.state.ticker + 1
        }), 1000
    )
  }

```
when the component, which in this case is the main component, `app.js` is called `componentDidMount()` is invoked at first. which invokes `setInterval()` storing the unique idea it returns to `this.state.setIntID`. 



### The live deployment can be found at https://github.com/sunilale0/react-lifecycle-ticker
