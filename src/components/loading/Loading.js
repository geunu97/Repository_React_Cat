import { Section } from './Styles';

const Loading = () => {
  return (
    <Section className="loading">
      <p>로딩중...</p>
      <div className="spinner" />
    </Section>
  );
};

export default Loading;
