import { Article, Section } from './Styles';
import { getCat } from '../../apis/Api';

const Cards = ({ cats, setCat, setOpenModal, setLoading }) => {
  if (cats.length === 0) return <h2>검색 결과가 없습니다.</h2>;

  const onClickImg = async (id) => {
    const response = await getCat(id, setLoading);
    setCat(response);
    setOpenModal(true);
  };
  return (
    <Article>
      {cats.map((item, index) => (
        <Section
          key={index}
          onClick={() => onClickImg(item.id)}
          title={item.name}
        >
          <img src={item.url} alt={item.name} />
        </Section>
      ))}
    </Article>
  );
};

export default Cards;
