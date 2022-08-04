import { useState } from 'react';
import { getCats, getRandomCats } from '../../apis/Api';
import { Section, Form, Input, Button } from './Styles';
import { useCallback } from 'react';

const SearchInput = ({
  input,
  setInput,
  setCats,
  setLoading,
  records,
  setRecord,
  setCurrentPage,
  setPageIndex,
}) => {
  const [timer, setTimer] = useState(0);

  const onDebounce = useCallback(
    async (e) => {
      setInput(e.target.value);
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(async () => {
        if (e.target.value !== '') {
          const response = await getCats(e.target.value, setLoading);
          setCurrentPage(1);
          setPageIndex(0);
          if (response && response.status === 200) setCats(response.data.data);
        }
      }, 600);

      setTimer(newTimer);
    },
    [setCats, setCurrentPage, setInput, setLoading, setPageIndex, timer],
  );

  const onClickInput = useCallback(
    (e) => {
      if (e.target.value !== '') setInput('');
    },
    [setInput],
  );

  const onSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();
      if (input === '') alert('검색어를 입력해주세요.');
      else {
        try {
          const response = await getCats(input, setLoading);
          setCurrentPage(1);
          setPageIndex(0);
          if (response && response.status === 200) {
            setCats(response.data.data);
            localStorage.setItem('data', JSON.stringify(response.data.data));
            if (records.length < 5) {
              setRecord(records.filter((item) => item !== input).concat(input));
            } else
              setRecord(
                records
                  .filter((item) => item !== input)
                  .concat(input)
                  .slice(1),
              );
          }
        } catch {
          console.log('input 에러');
        }
      }
    },
    [
      input,
      records,
      setCats,
      setCurrentPage,
      setLoading,
      setPageIndex,
      setRecord,
    ],
  );

  const onClickButton = useCallback(async () => {
    const response = await getRandomCats(setLoading);
    setCurrentPage(1);
    setPageIndex(0);
    if (response && response.status === 200) setCats(response.data.data);
  }, [setCats, setCurrentPage, setLoading, setPageIndex]);

  return (
    <Section>
      <Form onSubmit={onSubmitForm}>
        <Input
          placeholder="고양이를 검색해보세요."
          onChange={onDebounce}
          value={input}
          autoFocus
          onClick={onClickInput}
        />
        <Button type="submit" className="searchbutton inputbutton">
          입력
        </Button>
      </Form>
      <Button onClick={onClickButton} className="searchbutton randombutton">
        랜덤 버튼
      </Button>
    </Section>
  );
};

export default SearchInput;
