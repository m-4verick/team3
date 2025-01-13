import {useState} from "react";
import axios from "axios";
import SearchHeader from "../../../shared/components/SearchHeader.jsx";

export default function Photos() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        async function fetchData() {
            const res = await axios.get(
                `https://random.dog/woof.json`
            );
            const data = res.data;
            setResult(data);
            setValue("");
        }

        fetchData();
    };

    return (
        <>
            <SearchHeader title="사진" onClick={handleClick} onChange={handleChange} value={value}/>
            <div>
                {result ? (
                    <div className="p-4">
                        <img src={result.url} alt="" className="h-[450px] mx-auto"/>
                    </div>
                ) : (
                    <p className="text-center mt-20 text-2xl font-bold">그냥 검색만 눌러도 됨ㅋ</p>
                )}
            </div>
        </>
    );
}
