import { EncuestaPage } from './app.po';

describe('encuesta App', () => {
  let page: EncuestaPage;

  beforeEach(() => {
    page = new EncuestaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
