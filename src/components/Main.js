import React from 'react'
import marked from 'marked'
import '../styles.css';
class  Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: defaultValue
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleOutput = this.handleOutput.bind(this);
    };
    handleInput (event) {
        this.setState({
            value: event.target.value
        })
    }
    handleOutput () {
       return {
        __html: marked(this.state.value)
        }
    }
   render () {
        return (
            <div id="wraper">
                <h1 id="header">Markdown Previewer</h1>
            <div id="container">
                <div id="wrap-1">
                <h2 className="hed">Editor</h2>
                <textarea  onInput={this.handleInput}  value={this.state.value} id="editor"></textarea>
                </div>
                <div id='wrap-2'>
                <h2 className="hed">Preview</h2>
                <div  dangerouslySetInnerHTML={this.handleOutput()} id="preview"></div>
                </div>
                </div>
            </div>
        )
    }
}
export default Main;
const defaultValue =   `
# Hello!
## My name is Matvey.
### Today you will see how you can use markdown!
[Here you can find more of my projects](https://github.com/MotyaBolt)
> This line is part of the same quote.
Block of code: \`<h1></h1>\`
More code: 
\`\`\`
function sayHello () {
console.log('hello!')
}
\`\`\`
Lists: 
1. Item 1
    2. Item 2
    3. Item 3
* Item 1
    * Item 2
    * Item 3
Table:
One | Two | Three
------------ | ------------- | ------------- 
Four | Six | Seven
You can also make **bolded** text!
Image: 
![logo-markdown](logo.png)
`