import './styles/app.css'
import Header from "./components/Header.jsx";

/*const Card = ({ title }) => {
    return (
        <div>
            <h2 className="m-5 p-5 bg-gray-800 rounded-xl hover:bg-gray-600 cursor-pointer hover:scale-[1.1]" >{title}</h2>

            <div className="flex flex-col items-center text-center">
                <h1 className="m-10 mb-4 text-white text-7xl font-bold mx-auto al">Hello!</h1>

                <div className="cards-container text-gray-200 text-3xl font-semibold mt-16 p-10">
                    <Card title="Satar Wars" />
                    <Card title="Avatar" />
                    <Card title="The Lion King" />
                </div>

            </div>
        </div>
    )
}*/

export default function App() {
    return (
      <main>
        <Header/>
      </main>
    )
}
