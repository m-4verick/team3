import { useState } from "react";
import axios from "axios";
import SearchHeader from "../../../shared/components/SearchHeader.jsx";

export default function PokemonPage() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        async function fetchData() {
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${value}`
            );
            const data = res.data;
            setResult(data);
            setValue("");
        }
        fetchData();
    };

    return (
        <>
            <SearchHeader title="포켓몬 도감" onClick={handleClick} onChange={handleChange} value={value}/>
            <div>
                <p className="text-center font-bold mt-20 text-2xl">업데이트 예정입니다. 어쩔티비</p>
            </div>
        </>
    );
}
