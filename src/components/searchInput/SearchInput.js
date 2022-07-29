import { getCats, getRandomCats } from '../../apis/Api';
import { Section, Form, Input, Button } from './Styles';

const SearchInput = ({ input, setInput, setCats }) => {
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const response = await getCats(input);
    setCats(response);
  };

  const onClickButton = async () => {
    const response = await getRandomCats();
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
        />
      </Form>
      <Button onClick={onClickButton}>랜덤 버튼</Button>
    </Section>
  );
};

export default SearchInput;
