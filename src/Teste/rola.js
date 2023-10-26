import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import './rola.css';
import Button from 'react-bootstrap/Button';

function Rola() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  // Função para buscar dados da API
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.waifu.pics/sfw/${selectedOption}`);
      console.log(selectedOption);
      if (!response.ok) {
        throw new Error('Falha ao buscar dados da API');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // Manipulador de eventos para o botão
  const handleButtonClick = () => {
    setIsLoading(true); // Define isLoading como true para indicar carregamento
    fetchData(); // Chama a função para buscar os dados
  };

  useEffect(() => {
    // Inicializa os dados assim que o componente é montado
    fetchData();
  }, [selectedOption]); // Use selectedOption como dependência

  return (
    <div className='container'>
      <h1>Choose your Waifu</h1>
      <h3>If you want to try a new one, refresh the page</h3>

      <Form.Select
        aria-label="Default select example"
        className='form'
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="waifu">waifu</option>
        <option value="neko">neko</option>
        <option value="shinobu">shinobu</option>
        <option value="megumin">megumin</option>
        <option value="bully">bully</option>
        <option value="cuddle">cuddle</option>
        <option value="cry">cry</option>
        <option value="hug">hug</option>
        <option value="awoo">awoo</option>
        <option value="kiss">kiss</option>
        <option value="lick">lick</option>
        <option value="pat">pat</option>
        <option value="smug">smug</option>
        <option value="bonk">bonk</option>
        <option value="yeet">yeet</option>
        <option value="blush">blush</option>
        <option value="smile">smile</option>
        <option value="wave">wave</option>
        <option value="highfive">highfive</option>
        <option value="handhold">handhold</option>
        <option value="nom">nom</option>
        <option value="bite">bite</option>
        <option value="glomp">glomp</option>
        <option value="slap">slap</option>
        <option value="kill">kill</option>
        <option value="kick">kick</option>
        <option value="happy">happy</option>
        <option value="wink">wink</option>
        <option value="poke">poke</option>
        <option value="dance">dance</option>
        <option value="cringe">cringe</option>
      </Form.Select>



      {isLoading ? (
        <p>Loading your Waifu...</p>
      ) : (
        <div className='img'>
          <img src={data.url} height="50%" />
        </div>
      )}
    </div>
  );
}

export default Rola;
