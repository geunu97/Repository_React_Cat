import SearchInput from './components/searchInput/SearchInput';
import Cards from './components/cards/Cards';
import Modal from './components/modal/Modal';
import { Container, Header, Main } from './styles/styles';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [cats, setCats] = useState(null);
  const [cat, setCat] = useState(null);
  const [openmodal, setOpenModal] = useState(false);

  return (
    <Container>
      <Header>
        <SearchInput input={input} setInput={setInput} setCats={setCats} />
      </Header>
      <Main>
        <Cards cats={cats} setCat={setCat} setOpenModal={setOpenModal} />
        {openmodal && <Modal cat={cat} setOpenModal={setOpenModal} />}
      </Main>
    </Container>
  );
}

export default App;
