import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar'
import MainComponent from './components/MainContent';


function App(){
    return (
        <div>
            <Navbar/>
            <MainComponent/>
        </div>
    )
}

ReactDOM.render( 
    <App/>
, document.getElementById('root'));