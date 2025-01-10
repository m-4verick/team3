import Background from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import Dock from "./components/Dock.jsx";
import memo from '../../shared/assets/memo.png';
import map from '../../shared/assets/map.png';
import safari from '../../shared/assets/safari.png';
import Window from "./components/Window.jsx";
import books from '../../shared/assets/books.png';
import dictionary from '../../shared/assets/dictionary.png';
import Icon from "./components/Icon.jsx";
import sample from '../../shared/assets/sample-icon.png';

export default function MainPage() {

    return (
        <Background>
            <Navbar/>

            <Window>
                <h1>하이하이</h1>
            </Window>

            <Dock>
                <Icon image={safari}/>
                <Icon image={memo}/>
                <Icon image={map}/>
                <Icon image={dictionary}/>
                <Icon image={books}/>
                <Icon image={sample}/>
                <Icon image={sample}/>
                <Icon image={sample}/>
                <Icon image={sample}/>
                <Icon image={sample}/>
            </Dock>
        </Background>
    )
}
