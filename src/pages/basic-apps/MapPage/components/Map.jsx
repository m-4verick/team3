import {Marker, NaverMap, useNavermaps} from 'react-naver-maps'
import {useState} from "react";

const buttonsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    padding: '5px',
}

const buttonStyle = {
    margin: '0 5px 5px 0',
    WebkitAppearance: 'button',
    cursor: 'pointer',
    color: '#555',
    padding: '2px 6px',
    background: '#fff',
    border: 'solid 1px #333',
    WebkitBorderRadius: '5px',
    outline: '0 none',
    borderRadius: '5px',
    boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.5)',
}


export function MyMap() {
    const navermaps = useNavermaps()

    const jinho = new navermaps.LatLng(37.653251, 126.895357)
    const jiyeong = new navermaps.LatLng(37.5044, 127.0878)
    const seungwoo = new navermaps.LatLng(37.493737, 127.071019)
    const minhee = new navermaps.LatLng(37.602702, 127.079290)
    const heeseong = new navermaps.LatLng(37.602971, 126.868821)

    const [map, setMap] = useState(null)


    return (
        <NaverMap
            defaultZoom={9}
            ref={setMap}
        >
            <Marker position={jinho} />
            <Marker position={jiyeong} />
            <Marker position={seungwoo} />
            <Marker position={minhee} />
            <Marker position={heeseong} />

            <div style={buttonsStyle}>
                <button
                    style={buttonStyle}
                    onClick={(e) => {
                        e.preventDefault()
                        if (map) {
                            map.setCenter(jinho)
                            map.setZoom(15, true)
                        }
                    }}
                >
                    신진호
                </button>
                <button
                    style={buttonStyle}
                    onClick={(e) => {
                        e.preventDefault()
                        if (map) {
                            map.setCenter(jiyeong)
                            map.setZoom(15, true)
                        }
                    }}
                >
                    민지영
                </button>
                <button
                    style={buttonStyle}
                    onClick={(e) => {
                        e.preventDefault()
                        if (map) {
                            map.setCenter(seungwoo)
                            map.setZoom(15, true)
                        }
                    }}
                >
                    김승우
                </button>
                <button
                    style={buttonStyle}
                    onClick={(e) => {
                        e.preventDefault()
                        if (map) {
                            map.setCenter(minhee)
                            map.setZoom(15, true)
                        }
                    }}
                >
                    김민희
                </button>
                <button
                    style={buttonStyle}
                    onClick={(e) => {
                        e.preventDefault()
                        if (map) {
                            map.setCenter(heeseong)
                            map.setZoom(15, true)
                        }
                    }}
                >
                    김희성
                </button>
            </div>
        </NaverMap>
    )
}