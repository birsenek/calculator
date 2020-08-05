import React, { Component } from 'react'
import './style/visual.css'
import Button from './Buttons'
import Display from './Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    currentValue: 0
}

export default class Visual extends Component {

    state = {...initialState}

    clearMemory() {
        this.setState({...initialState})
    }

    calcOperation(operation) {
        console.log(operation)
        if (this.state.currentValue === 0) {
            this.setState({ operation, currentValue: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            switch (currentOperation) {
                case '/':
                    values[0] = values[0] / values[1]
                    break
                case '+':
                    values[0] = values[0] + values[1]
                    break
                case '-':
                    values[0] = values[0] - values[1]
                    break
                case 'x':
                    values[0] = values[0] * values[1]
                    break
                default:
                    break
            }
            
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                currentValue: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    dataInput(n) {
        //evitar mais de 1 '.'
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.currentValue
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }  
    }

    render() {
        const dataInput = n => this.dataInput(n)
        const calcOperation = operation => this.calcOperation(operation)
        return(
            <div className="visual">
                <Display  value={this.state.displayValue} />
                <Button label="Limpar" clearScreen click={_ => this.clearMemory()} />
                <Button label="/" operator click={operation => calcOperation(operation)} />
                <Button label="7" click={n => dataInput(n)} />
                <Button label="8" click={n => dataInput(n)} />
                <Button label="9" click={n => dataInput(n)} />
                <Button label="x" operator click={operation => calcOperation(operation)} />
                <Button label="4" click={n => dataInput(n)} />
                <Button label="5" click={n => dataInput(n)} />
                <Button label="6" click={n => dataInput(n)} />
                <Button label="-" operator click={operation => calcOperation(operation)} />
                <Button label="1" click={n => dataInput(n)} />
                <Button label="2" click={n => dataInput(n)} />
                <Button label="3" click={n => dataInput(n)} />
                <Button label="+" operator click={operation => calcOperation(operation)} />
                <Button label="0" zero click={n => dataInput(n)} />
                <Button label="." click={n => dataInput(n)} />
                <Button label="=" operator click={operation => calcOperation(operation)} />
            </div>
        )
    }
}