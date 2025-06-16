import Portfolio from './Portfolio';

const App = () => {
  const myBio = "Hi, I'm Gautam! A passionate React developer with a love for clean UIs and smooth user experiences.";

  return (
    <div>
      <Portfolio bio={myBio} />
    </div>
  );
};

export default App;