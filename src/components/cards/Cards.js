import { Article, Section } from './Styles';
import { getCat } from '../../apis/Api';

const Cards = ({ currentPosts, setCat, setOpenModal, setLoading }) => {
  if (currentPosts.length === 0) return <h2>검색 결과가 없습니다.</h2>;

  const onClickImg = async (id) => {
    const response = await getCat(id, setLoading);
    if (response && response.status === 200) {
      setCat(response.data.data);
      setOpenModal(true);
    }
  };
  return (
    <Article>
      {currentPosts.map((item, index) => (
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
