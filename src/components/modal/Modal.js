import { Block, ModalContainer } from './Styles';

const Modal = ({ cat, setOpenModal }) => {
  return (
    <Block>
      <ModalContainer>
        <section className="top">
          <div>{cat.name}</div>
          <div className="icon" onClick={() => setOpenModal(false)}>
            X
          </div>
        </section>
        <img src={cat.url} alt={cat.name} />
        <div>성격: {cat.temperament}</div>
        <div>태생: {cat.origin}</div>
      </ModalContainer>
    </Block>
  );
};

export default Modal;
