import searchSymbol from "../assets/searchSymbol.png";
import Button from "./Button.jsx";

export default function SearchHeader({ title, onClick, onChange, value }) {
    return (
        <>
            <div className="flex items-center justify-between px-3 mt-3">
                <p className="text-3xl font-bold">{title}</p>
                <div className="flex gap-1 relative">
                    <img src={searchSymbol} className="absolute top-2 left-2 w-4"/>
                    <input onChange={onChange} value={value} type="text"
                           className="border border-[#000000] border-opacity-10 rounded w-[300px] px-7"/>
                    <Button onClick={onClick}>검색</Button>
                </div>
            </div>
            <hr className="mt-5 mb-5"/>
        </>
            )
            }