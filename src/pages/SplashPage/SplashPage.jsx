import { useState, useEffect } from "react";
import appleLogo from "../../shared/assets/splashAppleLogo.png";
import bootingSound from "../../shared/assets/macBootingSound.wav";

const SplashPage = ({ onBootComplete }) => {
  const [auidoPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const playBootSound = () => {
      if (!auidoPlayed) {
        const audio = new Audio(bootingSound);
        audio.play().catch((error) => {
          console.error("BootingSound Error", error);
        });
        setAudioPlayed(true);
      }
    };

    document.addEventListener("click", playBootSound, { once: true });

    const timer = setTimeout(() => {
      onBootComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", playBootSound);
    };
  }, [onBootComplete, auidoPlayed]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
      <img
        src={appleLogo}
        alt="Apple Logo"
        className="w-20 h-20 filter brightness-0 invert"
      />
      <div className="w-40 h-1.5 bg-gray-700 rounded-full overflow-hidden mt-20">
        <div className="h-full bg-white animate-loading"></div>
      </div>
    </div>
  );
};

export default SplashPage;
