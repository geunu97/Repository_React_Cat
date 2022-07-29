import { Article, Section } from './Styles';
import { getCat } from '../../apis/Api';

const Cards = ({ cats, setCat, setOpenModal }) => {
  const onClickImg = async (id) => {
    const response = await getCat(id);
    setCat(response);
    setOpenModal(true);
  };
  return (
    <Article>
      {cats &&
        cats.map((item, index) => (
          <Section key={index} onClick={() => onClickImg(item.id)}>
            <img src={item.url} alt={item.name} />
          </Section>
        ))}
    </Article>
  );
};

export default Cards;
