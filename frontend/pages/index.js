import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/players')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Player Marketplace</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <h1>Player Marketplace</h1>
        <Link className="add" href="/players/new">Add Player</Link>
      </header>
      <section className="list">
        {players.map(player => (
          <Link key={player.id} href={`/players/${player.id}`} className="card">
            <h2>{player.name}</h2>
            <p>${player.price}</p>
          </Link>
        ))}
      </section>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          font-family: 'Orbitron', sans-serif;
          color: #ffffff;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        h1 {
          margin: 0;
          font-size: 2.5rem;
          letter-spacing: 2px;
        }
        .add {
          padding: 0.5rem 1rem;
          background: #00bcd4;
          border-radius: 4px;
          color: #fff;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .add:hover {
          background: #0097a7;
        }
        .list {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
        .card {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          text-decoration: none;
          color: #fff;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        h2 {
          margin: 0 0 0.5rem 0;
          font-size: 1.5rem;
        }
        p {
          margin: 0;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
