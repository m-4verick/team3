
export default function Button({children, onClick}) {
    return (
        <button onClick={onClick} className="bg-[#007AFF] rounded border border-white border-opacity-5 px-3 py-0.5 text-white hover:bg-[#0071EE]">
            {children}
        </button>
    )
}