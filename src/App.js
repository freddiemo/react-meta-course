import './App.css';
import Logo from './assets/logo.png';

function App() {
  const avatarImg = "https://picsum.photos/400/265";
  return (
    <div className="App">
      <h1>
        <img src={Logo} height="200" alt="Logo"/>
        <img src={avatarImg} alt="User"/>
      </h1>
    </div>
  );
}

export default App;
