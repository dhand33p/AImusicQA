import { useState } from "react";
<<<<<<< HEAD
const getSummary = (prompt) => {
    const url = 'DJANGOURL';
=======

const getSummary = (prompt) => {
    const url = 'http://127.0.0.1:8000/SpotAi/';
>>>>>>> a3ff6d41fa8a9f6b46497449ea32bc3a25a4b14f
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                text: prompt
            }
        )
    };
    return fetch(url, options).then(res => res.json());
}
function Chatbot() {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('...');

    const onSubmit = () => {
        getSummary(prompt).then(result => {
            setResult(result);
        }).catch(error => {
            setResult(error.message);
        });
    };

    return (
        <div className="container mx-auto max-w-3xl mt-20 px-5">
            <form onSubmit={e => e.preventDefault()} className="mb-10">
                <label htmlFor="prompt" className="block text-2xl font-bold mb-3">
<<<<<<< HEAD
                Please...
=======
                My favourite songs are...
>>>>>>> a3ff6d41fa8a9f6b46497449ea32bc3a25a4b14f
                </label>
                <input 
                    type="text" 
                    name="prompt" 
                    id="prompt" 
                    placeholder="..."
                    value={prompt}
                    className="w-full mb-5 rounded bg-slate-200 p-2"
                    onChange={e => setPrompt(e.target.value)}
                />
                <button 
                    className="px-5 py-3 rounded bg-slate-600 text-white block ml-auto"
                    onClick={onSubmit}
                >
                    Go!
                </button>
            </form>
            <h1 className="text-2xl mb-3 font-bold">
                You would also enjoy...
            </h1>
            <p className="p-2 bg-slate-200 rounded">
                {result}
            </p>
        </div>
    );
}

export default Chatbot;
