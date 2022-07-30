import SearchInput from './components/searchInput/SearchInput';
import Cards from './components/cards/Cards';
import Modal from './components/modal/Modal';
import Records from './components/records/Records';
import Loading from './components/loading/Loading';
import { Container, Header, Main } from './styles/styles';
import { useEffect, useState } from 'react';
import DarkMode from './components/darkMode/DarkMode';

function App() {
  const [input, setInput] = useState('');
  const [cats, setCats] = useState(null);
  const [cat, setCat] = useState(null);

  const [openmodal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [records, setRecord] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('data');
    if (data && data !== 'undefined') {
      setCats(JSON.parse(data));
    }
  }, []);

  document.addEventListener('keydown', (e) => {
    if (openmodal && e.key === 'Escape') setOpenModal(false);
  });

  document.addEventListener('click', (e) => {
    if (openmodal && e.target === document.querySelector('.backgroundModal'))
      setOpenModal(false);
  });

  return (
    <Container>
      <Header>
        <DarkMode />
        <SearchInput
          input={input}
          setInput={setInput}
          setCats={setCats}
          setLoading={setLoading}
          records={records}
          setRecord={setRecord}
        />
        {loading && <Loading />}
        {records.length > 0 && (
          <Records
            records={records}
            setCats={setCats}
            setLoading={setLoading}
            setInput={setInput}
          />
        )}
      </Header>
      <Main>
        <Cards
          cats={cats}
          setCat={setCat}
          setOpenModal={setOpenModal}
          setLoading={setLoading}
        />
        {openmodal && <Modal cat={cat} setOpenModal={setOpenModal} />}
      </Main>
    </Container>
  );
}

export default App;
