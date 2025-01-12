import { useState } from "react";

export default function KimSeungWooPage() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [currentDir, setCurrentDir] = useState("~");

  const fileSystem = {
    "~": ["Documents", "Downloads", "Desktop", "projects"],
    "~/projects": ["react-app", "ios-clone", "game-dev"],
    "~/Documents": ["resume.pdf", "notes.txt"],
  };

  const fileContents = {
    "resume.pdf":
      "Kim Seungwoo - Software Engineer\nExperience: React, Tailwind, iOS Development",
    "notes.txt": "To-Do:\n1. Finish macOS clone\n2. Learn React hooks",
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim() !== "") {
        if (input.toLowerCase() === "clear") {
          setHistory([]); // clear 명령어 실행 시 history를 완전히 지움
        } else {
          setHistory([...history, `> ${input}`, executeCommand(input)]);
        }
        setInput("");
      }
    }
  };

  const executeCommand = (command) => {
    const args = command.split(" ");
    const cmd = args[0].toLowerCase();

    switch (cmd) {
      case "help":
        return "Available commands: help, clear, ls, cd [dir], pwd, cat [file], roll, whoami, ascii-art";

      case "clear":
        setHistory([]);
        return "";

      case "ls":
        return fileSystem[currentDir] ? fileSystem[currentDir].join("\n") : "";

      case "cd":
        if (args[1]) {
          const newPath = args[1] === ".." ? "~" : `${currentDir}/${args[1]}`;
          if (fileSystem[newPath]) {
            setCurrentDir(newPath);
            return `Moved to ${newPath}`;
          } else {
            return `Directory not found: ${args[1]}`;
          }
        }
        return "Usage: cd [directory]";

      case "pwd":
        return currentDir;

      case "cat":
        if (args[1] && fileContents[args[1]]) {
          return fileContents[args[1]];
        }
        return "File not found or missing argument";

      case "roll":
        return `🎲 You rolled a ${Math.floor(Math.random() * 6) + 1}`;

      case "whoami":
        return "User: Kim Seungwoo\nRole: Developer\nLocation: South Korea";

      case "ascii-art":
        if (args[1] === "spaceship") {
          return `
                /\    
               |==|   
               |  |   
              /____\\  
            (______)  
          `;
        }
        return "Available ascii-art: spaceship";

      default:
        return `Command not found: ${command}`;
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col p-4">
      <div className="h-full overflow-y-auto">
        {history.map((line, index) => (
          <div key={index} className=" whitespace-pre-line text-white">
            {line}
          </div>
        ))}

        <div className="flex">
          <span className="text-green-300 mr-2">KimSeungWoo@mac ~ %</span>
          <input
            type="text"
            className="bg-transparent outline-none border-none text-white flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
