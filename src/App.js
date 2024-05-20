import './App.css';
import HeaderBar from'./components/header/HeaderBar';
import InstagramFeed from './components/instafeed/InstagramPosts';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <InstagramFeed />
    </div>
  );
}

export default App;
