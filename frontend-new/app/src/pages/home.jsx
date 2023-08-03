import React from "react";

function Home() {
  return (
    <section className="mt-8 text-section"> {/* Added the "text-section" class */}
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
  );
}

export default Home;
