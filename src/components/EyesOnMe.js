import React from 'react'


export default class EyesOnMe extends React.Component {
    
focusFinder = () => {
    console.log('Good!')
}

blurLogger = () => {
    console.log('Hey! Eyes on me!')
}
    
    render() {

        return (
            <button onFocus={this.focusFinder} onBlur={this.blurLogger}>

            </button>
        )
    }
}