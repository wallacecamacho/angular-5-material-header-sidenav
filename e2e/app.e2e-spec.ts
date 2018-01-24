import { AppPage } from './app.po';

describe('proj-ang2 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular 5 and Material 2 Sticky Footer Example');
  });
});
