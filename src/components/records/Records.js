import { getCats } from '../../apis/Api';
import { Section, Card } from './Styles';
import { useCallback } from 'react';

const Records = ({ records, setCats, setLoading, setInput }) => {
  const onClickRecords = useCallback(
    async (item) => {
      try {
        setInput(item);
        const response = await getCats(item, setLoading);
        setCats(response);
        localStorage.setItem('data', JSON.stringify(response));
      } catch {
        console.log('record 에러');
      }
    },
    [setCats, setInput, setLoading],
  );

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
