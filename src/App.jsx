import { BiChevronsUp } from "react-icons/bi";
import "./App.css";
import Root from "./components/Root";

function App() {
  return (
    <div className="App">
      <div className="">
        <Root />
        <a
          href="#"
          className="bottom-[30px] right-[30px] fixed bg-[#17a2b8] px-[11px] text-white py-5 anime"
        >
          <a href="#">
            {" "}
            <BiChevronsUp size={"25px"} />
          </a>
        </a>
      </div>
    </div>
  );
}

export default App;
