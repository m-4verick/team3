
export default function Dock({ children }) {
    return (
        <div className="z-30 fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 border border-[#1A1A1A] border-opacity-10 mb-2 rounded-2xl p-1">
            <div className="h-[70px] flex">
                {children}
            </div>
        </div>
    )
}