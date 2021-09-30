import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

function Home() {
  const history = useHistory();

  useEffect(() => {
    console.log('Renderizou');
  }, []);

  return (
    <div>
      <h1>Home page {history.location.search} </h1>
      <Link to="/?deko=possas">
        <button>testando Link</button>
      </Link>
      <Link to="/?deko=possas2">
        <button>testando Link</button>
      </Link>
      <Link to="/?deko=possas3">
        <button>testando Link</button>
      </Link>
    </div>
  );
}

export default Home;
