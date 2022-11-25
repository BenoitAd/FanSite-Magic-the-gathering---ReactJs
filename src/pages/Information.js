import { useNavigate } from 'react-router-dom';
import Navbar from '../composants/Navbar';

function Information() {
    const navigate = useNavigate()
    return (
        <div className='navbar-container'>
        <Navbar/>
            <div>
                <h1 className='pageTitle'>Page d'Information</h1>
                <p className='p'>Ce site a été réaliser dans le cadre d'un projet en cours de Développement Web Réactif a L'IUT de Nantes. <br/>
                L'api utilisée lors de sa réalisation est : <a className='link' href="https://docs.magicthegathering.io/">Magic Gathering API</a>. <br/> 
                Auteur : Auger-Dubois Benoit 
                </p>
            </div>
        </div>
    )
}

export default Information;