import "./App.css";
import Root from "./components/Root";
import Image from '../src/Pages/Снимок экрана 2024-02-14 170651.png'

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Root />
        <a href="#" className="bottom-[30px] right-[30px] fixed bg-[#17a2b8] px-[14px] py-6 anime"> 
          <a href="#"> <img src={Image} className="w-4" alt="" /></a>
        </a>
      </div>
    </div>
  );
}

export default App;
