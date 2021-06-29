import './App.css';
import Form from './components/Form'
import Todolist from './components/Todolist';
// import ImgUpload from './components/ImgUpload'
function App() {

  return (
    <div className="App">
     <h1>Akash's Feed</h1>
     <Form />
     <Todolist />
     {/* <ImgUpload /> */}
    </div>
  );
}

export default App;
