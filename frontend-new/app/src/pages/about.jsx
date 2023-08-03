import React from 'react';

function About() {
    return (
        <div>
            <h1 className="text-center text-xl font-bold text-slate-600 mt-20">
                About Page
            </h1>
            <section className="mt-8">
                <h2 className="text-center text-xl font-bold text-slate-600">
                    Team
                </h2>
                <ul className="text-center mt-4">
                    <li className="text-slate-500">Hi, I am Abby and I am idk years old.</li>
                    <li className="text-slate-500">Hi, I am Andy and I am idk years old.</li>
                    <li className="text-slate-500">Hi, I am Om and I am idk years old.</li>
                    <li className="text-slate-500">Hi, I am Orlando and I am idk years old.</li>
                </ul>
            </section>
        </div>
    );
}

export default About;
