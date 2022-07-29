import { Block, ModalContainer } from './Styles';

const Modal = ({ cat, setOpenModal }) => {
  if (!cat) return;
  const { name, url, temperament, origin } = cat;

  return (
    <Block className="backgroundModal">
      <ModalContainer className="modal">
        <section className="top">
          <div>{name}</div>
          <div className="icon" onClick={() => setOpenModal(false)}>
            X
          </div>
        </section>
        <img src={url} alt={name} />
        <div>성격: {temperament}</div>
        <div>태생: {origin}</div>
      </ModalContainer>
    </Block>
  );
};

export default Modal;
