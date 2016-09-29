import { TicTabToeClientPage } from './app.po';

describe('tic-tab-toe-client App', function() {
  let page: TicTabToeClientPage;

  beforeEach(() => {
    page = new TicTabToeClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

});
