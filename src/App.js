import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav brand="Menu" home="Home" about="About" browse="Browse" />
      </header>
      <main>
        <Welcome websiteName="BOOKAZON" websiteSubtitle="The most amazing book store"/>
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter mainText="&copy; EPICODE - 2023"/>
      </footer>
    </div>
  );
}

export default App;
