import { SearchInputBlock, Input, Button } from './styles';

const SearchInput = () => {
  return (
    <SearchInputBlock>
      <Input placeholder="고양이를 검색해보세요." />
      <Button>랜덤버튼</Button>
    </SearchInputBlock>
  );
};

export default SearchInput;
