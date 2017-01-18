import { PxToRemCalculatorPage } from './app.po';

describe('px-to-rem-calculator App', function() {
  let page: PxToRemCalculatorPage;

  beforeEach(() => {
    page = new PxToRemCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
