import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>If you want to contact with me, send me a message on <a href="https://www.linkedin.com/in/paola-cartala/" target="_blank" rel="noreferrer">LinkedIn</a>, thanks! :)</p>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default About