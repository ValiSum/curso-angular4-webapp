import { CursoAngular4WebappPage } from './app.po';

describe('curso-angular4-webapp App', () => {
  let page: CursoAngular4WebappPage;

  beforeEach(() => {
    page = new CursoAngular4WebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
