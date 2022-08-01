import { Container, Header, Main } from './styles/styles';
import { useEffect, useState } from 'react';
import DarkMode from './components/darkMode/DarkMode';
import SearchInput from './components/searchInput/SearchInput';
import Cards from './components/cards/Cards';
import Modal from './components/modal/Modal';
import Records from './components/records/Records';
import Loading from './components/loading/Loading';
import Pagination from './components/pagination/Pagination';

function App() {
  const [input, setInput] = useState('');
  const [cats, setCats] = useState([]);
  const [cat, setCat] = useState(null);

  const [openmodal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [records, setRecord] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = cats.slice(indexOfFirstPost, indexOfLastPost);

  const [pageIndex, setPageIndex] = useState(0);

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
          setCurrentPage={setCurrentPage}
          setPageIndex={setPageIndex}
        />
        {loading && <Loading />}
        {records.length > 0 && (
          <Records
            records={records}
            setCats={setCats}
            setLoading={setLoading}
            setInput={setInput}
            setCurrentPage={setCurrentPage}
            setPageIndex={setPageIndex}
          />
        )}
      </Header>
      <Main>
        <Cards
          currentPosts={currentPosts}
          setCat={setCat}
          setOpenModal={setOpenModal}
          setLoading={setLoading}
        />
        <Pagination
          postPerPage={postPerPage}
          totalPosts={cats.length}
          setCurrentPage={setCurrentPage}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
        {openmodal && <Modal cat={cat} setOpenModal={setOpenModal} />}
      </Main>
    </Container>
  );
}

export default App;
