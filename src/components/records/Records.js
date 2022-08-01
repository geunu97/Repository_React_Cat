import { getCats } from '../../apis/Api';
import { Section, Card } from './Styles';
import { useCallback } from 'react';

const Records = ({
  records,
  setCats,
  setLoading,
  setInput,
  setCurrentPage,
  setPageIndex,
}) => {
  const onClickRecords = useCallback(
    async (item) => {
      try {
        setInput(item);
        const response = await getCats(item, setLoading);
        setCurrentPage(1);
        setPageIndex(0);
        if (response && response.status === 200) {
          setCats(response.data.data);
          localStorage.setItem('data', JSON.stringify(response.data.data));
        }
      } catch {
        console.log('record 에러');
      }
    },
    [setCats, setCurrentPage, setInput, setLoading, setPageIndex],
  );

  return (
    <Section>
      {records.length > 0 &&
        records.map((item, index) => (
          <Card key={index} onClick={() => onClickRecords(item)}>
            {item}
          </Card>
        ))}
    </Section>
  );
};

export default Records;
