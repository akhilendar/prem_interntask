import { Component } from "react";

const candidateDetails = {
    firstName: "Prem Rathan",
    highestDegreePassoutYear: "April-2024",
    technologiesWorkedWith: ['React', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'NodeJS', 'Bootstrap'],
}

class LandingPage extends Component{
    render(){

        return(
            <div style={{padding: '10px' }}>
                <h1>First Name: {candidateDetails.firstName}</h1>
                <p>Highest Degree Passout Year: {candidateDetails.highestDegreePassoutYear}</p>
                <p>Technologies/Languages: {candidateDetails.technologiesWorkedWith.join(', ')}</p>
            </div>
        )
    }
}
export default LandingPage