import wallpaper from '../../../shared/assets/wallpaper.png';

export default function Background({children, background = wallpaper}) {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
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