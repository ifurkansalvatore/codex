import { useRouter } from 'next/router';
import { useState } from 'react';

export default function NewPlayer() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const submit = async e => {
    e.preventDefault();
    await fetch('http://localhost:8000/players', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, description }),
    });
    router.push('/');
  };

  return (
    <form onSubmit={submit}>
      <h1>Add Player</h1>
      <div>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label>Price</label>
        <input value={price} onChange={e => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
