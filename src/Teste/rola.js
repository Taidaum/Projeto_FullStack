import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Rola() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.waifu.pics/sfw/${searchTerm}`);
      console.log(searchTerm);
      if (!response.ok) {
        throw new Error('Falha ao buscar dados da API');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
      setError(null); 
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError('Erro ao buscar dados. Tente novamente.'); 
    }
  };

  
  const handleSearch = () => {
    // Validações
    if (searchTerm.trim() === '') {
      setError('O campo de busca não pode estar vazio.');
    } else {
      setIsLoading(true); 
      fetchData(); 
    }
  };

  useEffect(() => {
    
    fetchData();
  }, [searchTerm]); 

  return (
    <div className='container'>
      <h1>Choose your Waifu</h1>
      <h3>If you want to try a new one, refresh the page</h3>

      <Form.Control
        type="text"
        placeholder="Digite o nome da sua Waifu"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setError(null); 
        }}
      />

      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>

      {error && <p className="text-danger">{error}</p>}

      {isLoading ? (
        <p>Loading your Waifu...</p>
      ) : (
        <div className='img'>
          <img src={data.url} alt="50%" height="50%" />
        </div>
      )}
      <div>
      <footer className='App-footer'>
          <Link to="/Finder">
            <button type="button" className ="btn btn-primary btn-lg">Finder</button>
          </Link>
          <Link to="/">
            <button type="button" className ="btn btn-primary btn-lg">Landing Page</button>
          </Link>
      </footer>
      </div>
      

    </div>

        

  );
}

export default Rola;
