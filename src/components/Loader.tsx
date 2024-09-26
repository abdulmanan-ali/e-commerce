  import catAnimationData from "../assets/loader.json";
  import LottieLoader from 'react-lottie-loader';

  function App() {
    return (
      <section className="loader">
        <LottieLoader animationData={catAnimationData} />
      </section>
    );
  }

  export default App;