import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import Playground from './components/playground';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Playground/>
      <Footer/>
    </div>
  );
}

export default App;
