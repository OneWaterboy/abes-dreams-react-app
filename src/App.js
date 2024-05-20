import './App.css';
import HeaderBar from'./components/header/HeaderBar';
import InstagramFeed from './components/instafeed/InstagramPosts';

function App() {
  const token = process.env.INSTA_TOKEN;
  return (
    <div className="App">
      <HeaderBar />
      <InstagramFeed />
    </div>
  );
}

export default App;
