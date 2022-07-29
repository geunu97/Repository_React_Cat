import { Section, Card } from './Styles';

const Records = ({ records }) => {
  return (
    <Section>
      {records.length > 0 &&
        records.map((item) => <Card key={item}>{item}</Card>)}
    </Section>
  );
};

export default Records;
