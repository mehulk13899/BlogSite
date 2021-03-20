import './App.css';
import Blog from './component/Blog';
import Homepage from './component/Homepage';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Blog></Blog>
    </div>
  );
}

export default App;
