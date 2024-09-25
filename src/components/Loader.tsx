import catAnimationData from "../assets/loader.json";
import LottieLoader from 'react-lottie-loader';

function App() {
  return (
    <div className="loader">
      <LottieLoader animationData={catAnimationData} />
    </div>
  );
}

export default App;