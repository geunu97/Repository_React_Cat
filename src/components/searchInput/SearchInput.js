import { getCats, getRandomCats } from '../../apis/Api';
import { Section, Form, Input, Button } from './Styles';

const SearchInput = ({
  input,
  setInput,
  setCats,
  setLoading,
  records,
  setRecord,
}) => {
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onClickInput = (e) => {
    if (e.target.value !== '') setInput('');
  };

  const onSubmitForm = async (e) => {
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
  };

  const onClickButton = async () => {
    const response = await getRandomCats(setLoading);
    setCats(response);
  };

  return (
    <Section>
      <Form onSubmit={onSubmitForm}>
        <Input
          placeholder="고양이를 검색해보세요."
          onChange={onChangeInput}
          value={input}
          autoFocus
          onClick={onClickInput}
        />
      </Form>
      <Button onClick={onClickButton}>랜덤 버튼</Button>
    </Section>
  );
};

export default SearchInput;
