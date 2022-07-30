import { getCats } from '../../apis/Api';
import { Section, Card } from './Styles';

const Records = ({ records, setCats, setLoading, setInput }) => {
  const onClickRecords = async (item) => {
    try {
      setInput(item);
      const response = await getCats(item, setLoading);
      setCats(response);
      localStorage.setItem('data', JSON.stringify(response));
    } catch {
      console.log('record 에러');
    }
  };

  return (
    <Section>
      {records.length > 0 &&
        records.map((item) => (
          <Card key={item} onClick={() => onClickRecords(item)}>
            {item}
          </Card>
        ))}
    </Section>
  );
};

export default Records;
