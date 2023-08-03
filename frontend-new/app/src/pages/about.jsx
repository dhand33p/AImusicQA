import React from 'react';

function About() {
    return (
        <div>
            <h1 className="text-center text-xl font-bold text-slate-600 mt-20">
                About Page
            </h1>
            <section className="mt-8">
                <h2 className="text-center text-xl font-bold text-slate-600">
                    AI Music Recommendation Bot - SpotAI
                </h2>
                <p className="text-center text-lg text-slate-500 mt-4">
                    SpotAI is an advanced AI-powered music recommendation bot that brings you personalized playlists tailored to your unique musical preferences. Our sophisticated algorithms analyze your listening habits, favorite artists, and genres to curate playlists that perfectly suit your mood and taste.
                </p>
                <p className="text-center text-lg text-slate-500 mt-4">
                    With SpotAI, discovering new music has never been easier. Whether you're in the mood for relaxation, workout beats, or upbeat party anthems, SpotAI has got you covered. Say goodbye to endless scrolling through music libraries – let SpotAI be your music companion and introduce you to the sounds you'll love.
                </p>
            </section>

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
