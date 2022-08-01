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
          setCats(response);
        }
      }, 600);

      setTimer(newTimer);
    },
    [setCats, setInput, setLoading, timer],
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
          setCats(response);
          localStorage.setItem('data', JSON.stringify(response));
          setRecord(records.filter((item) => item !== input).concat(input));
          if (records.length > 5) setRecord(records.shift());
        } catch {
          console.log('input 에러');
        }
      }
    },
    [input, records, setCats, setLoading, setRecord],
  );

  const onClickButton = useCallback(async () => {
    const response = await getRandomCats(setLoading);
    setCats(response);
  }, [setCats, setLoading]);

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
        <Button type="submit" className="searchbutton">
          입력
        </Button>
      </Form>
      <Button onClick={onClickButton} className="searchbutton">
        랜덤 버튼
      </Button>
    </Section>
  );
};

export default SearchInput;
