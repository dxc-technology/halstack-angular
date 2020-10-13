import { render } from '@testing-library/angular';
import { DxcLinkComponent } from './dxc-link.component';

describe('DxcLink tests', () => {
  test('should render dxc-link', async () => {
    const { getByText } = await render(DxcLinkComponent, {
      componentProperties: { text: "test-link" },
    })

    expect(getByText("test-link"))
  })

  test("Calls correct function on click", async () => {
    const { getByText } = await render(DxcLinkComponent, {
      componentProperties: { text: "test-link", href: "/testpage" },
    })

    const link = getByText("test-link");
    expect(link.getAttribute('href')).toEqual('/testpage');
  });
});
