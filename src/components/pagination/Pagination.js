import { Section, Button } from './Styles';

const Pagination = ({
  postPerPage,
  totalPosts,
  setCurrentPage,
  pageIndex,
  setPageIndex,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const DivPageNumbers = [];
  for (let i = 0; i < pageNumbers.length; i += 10) {
    DivPageNumbers.push(pageNumbers.slice(i, i + 10));
  }

  return (
    <>
      {DivPageNumbers.length > 0 && (
        <Section>
          <Button
            onClick={() => setPageIndex(pageIndex - 1)}
            disabled={pageIndex === 0}
          >
            &lt;
          </Button>
          {DivPageNumbers[pageIndex].map((number) => (
            <Button
              key={number}
              onClick={() => setCurrentPage(number)}
              current={currentPage === number ? true : false}
            >
              {number}
            </Button>
          ))}
          <Button
            onClick={() => setPageIndex(pageIndex + 1)}
            disabled={pageIndex === DivPageNumbers.length - 1}
          >
            &gt;
          </Button>
        </Section>
      )}
    </>
  );
};

export default Pagination;
