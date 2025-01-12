import AppWindow from "../../../shared/components/AppWindow.jsx";
import { useState } from "react";
import axios from "axios";
import SearchHeader from "../../../shared/components/SearchHeader.jsx";

export default function DictionaryPage() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
      );
      const data = res.data;
      setResult(data);
      setValue("");
    }
    fetchData();
  };

  return (
      <>
        <SearchHeader title="신원스쿨 영어사전" onClick={handleClick} onChange={handleChange} value={value}/>
      <div>
        {result ? (
          <div>
            {result.map((entry, index) => (
              <div key={index} className="mb-4">
                <h2 className="font-bold">{entry.word}</h2>
                <p className="italic">
                  {entry.phonetics[0]?.text || "발음 정보 없음"}
                </p>
                <ul>
                  {entry.meanings.map((meaning, idx) => (
                    <li key={idx}>
                      <strong>{meaning.partOfSpeech}:</strong>{" "}
                      {meaning.definitions[0].definition}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>결과를 확인하려면 단어를 입력하고 검색하세요.</p>
        )}
      </div>
      </>
  );
}
