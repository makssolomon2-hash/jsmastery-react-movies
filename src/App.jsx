import './styles/app.css'
import Header from "./components/Header.jsx";
import DemoApp from "./components/DemoApp.jsx";

/*const Card = ({ title }) => {
    return (
        <div>
            <h2 className="m-5 p-5 bg-gray-800 rounded-xl hover:bg-gray-600 cursor-pointer hover:scale-[1.1]" >{title}</h2>
        </div>
    )
}*/

export default function App() {
    return (
      <main>
          <Header/>
          <DemoApp/>
      </main>
    )
}
