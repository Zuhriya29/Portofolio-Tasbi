// src/SplashScreen.jsx
import { useEffect } from "react";
import "../assets/style.css";
import AnimatedContent from './Animation/AnimatedContent'
import SplitText from "./Animation/SplitText";
import BlurText from "./Animation/BlurText";


function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000); // splash muncul 2 detik
    return () => clearTimeout(timer);
  }, [onFinish]);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    console.log('Animation completed!');
  };

  return (
    <div className="utama-spinner">
      <div className="spinner d-flex justify-content-center align-items-center">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.9}
          ease="bounce.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
          delay={0.3}
        >
          <img src="logo-1.png" alt="Logo" style={{ width: "8vw" }} />
        </AnimatedContent>
        <div className="text-spinner">
          <h1><SplitText
            text="Hello, I am Tasbi !"
            className="text-2xl font-semibold text-center"
            delay={10}
            duration={2}
            ease="elastic.out(1,0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          /></h1>
          <BlurText
            text="Web Developer & UI/UX Designer"
            delay={350}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
        </div>
      </div>
        <div className="loader"></div>
    </div>
  );
}

export default SplashScreen;
