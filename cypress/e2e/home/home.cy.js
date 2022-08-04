describe('홈 화면', () => {
  beforeEach(() => {
    cy.visit('http://localhostasd:3000');
  });

  it('다크모드', () => {
    cy.get('.darkModeBtn').should('exist');
  });

  it('검색', () => {
    cy.get('input[placeholder="고양이를 검색해보세요."]').type('페르시안');
    cy.get('.inputbutton').invoke('text').should('eq', '입력');
    cy.get('.inputbutton').click();
    cy.get('.loading').should('exist');
  });

  it('랜덤 검색', () => {
    cy.get('.randombutton').invoke('text').should('eq', '랜덤 버튼');
    cy.get('.randombutton').click();
    cy.get('.loading').should('exist');
  });
});
