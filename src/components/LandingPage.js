import {Component} from 'react'

const candidateDetails = {
  firstName: 'Prem Rathan',
  highestDegreePassoutYear: 'April-2024',
  technologiesWorkedWith: [
    'React',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'SQL',
    'NodeJS',
    'Bootstrap',
  ],
}

class LandingPage extends Component {
  render() {
    const downloadResume = () => {
      window.open(
        'https://drive.google.com/file/d/1m0rrSsW7LyuSVQj75ozSJkax5lc_XPB9/view',
      )
    }

    return (
      <div style={{padding: '10px'}}>
        <h1>First Name: {candidateDetails.firstName}</h1>
        <p>
          Highest Degree Passout Year:{' '}
          {candidateDetails.highestDegreePassoutYear}
        </p>
        <p>
          Technologies/Languages:{' '}
          {candidateDetails.technologiesWorkedWith.join(', ')}
        </p>
        <button type="button" onClick={downloadResume}>
          Download Resume
        </button>
        <p>
          Click here to Calculate your BMI:{' '}
          <button
            type="button"
            onClick={() => {
              window.location.href = '/bmi-calculator'
            }}
          >
            BMI Calculator
          </button>
        </p>
      </div>
    )
  }
}
export default LandingPage
