import '../styles/app.css';
import {useEffect, useState} from "react";

const Card = ({ title }) => {
    const [count, setCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`)
    }, [hasLiked]);

    useEffect(() => {
        console.log('card rendered')
    }, []);


    return (
        <div
            className="card"
            style={{
                border: '1px solid #4d5362',
                padding: '20px',
                margin: '10px',
                backgroundColor: '#31363f',
                borderRadius: '10px',
                minHeight: '100px',
            }}

            onClick={() => setCount(count + 1)}
        >
            <h2 className="m-5 p-5 bg-gray-800 rounded-xl hover:bg-gray-600 cursor-pointer hover:scale-[1.05]" >{title} - {count}</h2>

            <button
                className="border-none text-2xl bg-transparent w-full text-right cursor-pointer"
                onClick={() => setHasLiked(!hasLiked)}
            >
                {hasLiked ? '❤️' : '🤍'}
            </button>
        </div>
    )
}

export default function DemoApp() {
    return (
        <main>
            <div className="flex flex-col items-center text-center">
                <h1 className="m-10 mb-4 text-white text-7xl font-bold mx-auto al">Hello,User!</h1>

                <div className="cards-container flex flex-wrap justify-center items-center text-gray-200
            text-3xl font-semibold mt-16 p-10 max-w-1024px m-0 m-auto ">
                    <Card title="Satar Wars" rating={5} isCool={true} actors={[{name: 'Actors'}]} />
                    <Card title="Avatar" />
                    <Card title="The Lion King" />
                </div>

            </div>
        </main>
    )
}
