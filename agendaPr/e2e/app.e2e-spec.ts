import { AgendaPrPage } from './app.po';

describe('agenda-pr App', () => {
  let page: AgendaPrPage;

  beforeEach(() => {
    page = new AgendaPrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
