import { Section } from './Styles';

const Loading = () => {
  return (
    <Section>
      <p>로딩중...</p>
      <div className="spinner" />
    </Section>
  );
};

export default Loading;
