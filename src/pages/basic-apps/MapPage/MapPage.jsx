import {Container as MapDiv} from 'react-naver-maps'
import AppWindow from "../../../shared/components/AppWindow.jsx";
import {MyMap} from "./components/Map.jsx";

export default function MapPage() {
    return (
            <AppWindow title="지도">
                <MapDiv
                    style={{
                        width: '100%',
                        height: '525px',
                    }}
                >
                    <MyMap />
                </MapDiv>
            </AppWindow>
    )
}