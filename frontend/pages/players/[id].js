import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PlayerDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:8000/players/${id}`)
      .then(res => res.json())
      .then(setPlayer);
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h1>{player.name}</h1>
      <p>Price: ${player.price}</p>
      <p>{player.description}</p>
    </div>
  );
}
