import wallpaper from '../../../shared/assets/wallpaper.png';

export default function Background({children}) {
    return (
        <div
            style={{
                backgroundImage: `url(${wallpaper})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
            }}
        >
            {children}
        </div>
    )
}