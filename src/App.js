import ruleta from './imgs/ruleta.png'
import './css/App.css';

function App() {
  return (
    <div className="container">
      <h1>
        La ruleta rusa del Home Office
      </h1>
      <img src={ruleta} className="ruleta" alt="ruleta" />
    </div>
  );
}

export default App;
