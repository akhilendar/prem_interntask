import {Component} from 'react'

class BMICalculator extends Component {
  state = {
    weight: '',
    height: '',
    bmi: false,
  }

  onChangeWeight = event => {
    this.setState({weight: event.target.value})
  }

  onChangeHeight = event => {
    this.setState({height: event.target.value})
  }

  calculateBMI = () => {
    const {weight, height} = this.state
    const parsedWeight = parseFloat(weight)
    const parsedHeight = parseFloat(height)

    if (
      !Number.isNaN(parsedWeight) &&
      !Number.isNaN(parsedHeight) &&
      parsedWeight >= 1.0 &&
      parsedWeight <= 300.0 &&
      parsedHeight >= 0.1 &&
      parsedHeight <= 3.0
    ) {
      const calculatedBMI = parsedWeight / parsedHeight ** 2
      this.setState({bmi: calculatedBMI.toFixed(1)})
    } else {
      this.setState({bmi: false})
      alert(
        'Please enter valid Weight (1.0 - 300.0 kg) and Height (0.1 - 3.0 meters).',
      )
    }
  }

  render() {
    const {weight, height, bmi} = this.state
    return (
      <div style={{padding: '10px'}}>
        <label htmlFor="weight">Weight in kilograms: </label>
        <input
          type="number"
          id="weight"
          placeholder="Weight (kg)"
          value={weight}
          onChange={this.onChangeWeight}
        />
        <br />
        <label htmlFor="height">Height in meters: </label>
        <input
          type="number"
          id="height"
          placeholder="Height (m)"
          value={height}
          onChange={this.onChangeHeight}
        />
        <br />
        <button type="button" onClick={this.calculateBMI}>
          Calculate BMI
        </button>
        {bmi && <p>Your BMI is: {bmi}</p>}
        <br />
        <button
          type="button"
          onClick={() => {
            window.location.href = '/'
          }}
        >
          Go to LandingPage
        </button>
      </div>
    )
  }
}
export default BMICalculator
