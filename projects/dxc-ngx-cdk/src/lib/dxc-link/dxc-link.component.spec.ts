import { render, fireEvent } from '@testing-library/angular';
import { DxcLinkComponent } from './dxc-link.component';

describe('DxcLink tests', () => {
  test('should render dxc-link', async () => {
    const { getByText } = await render(DxcLinkComponent, {
      componentProperties: { text: "test-link" },
    })

    expect(getByText("test-link"))
  })

  test("Calls correct function with href", async () => {
    const { getByText } = await render(DxcLinkComponent, {
      componentProperties: { text: "test-link", href: "/testpage" },
    })

    const link = getByText("test-link");
    expect(link.getAttribute('href')).toEqual('/testpage');
  });

  test("click on dxc-link", async () => {
    const onClickFunction = jest.fn();
    const { getByText } = await render(DxcLinkComponent, {
      template: `<dxc-link text="test-link" (onClick)="onClickFunction($event)"></dxc-link>`,
      componentProperties: { onClickFunction },
    });

    expect(getByText("test-link"));
    fireEvent.click(getByText("test-link"));
    expect(onClickFunction).toHaveBeenCalled();
  });
});
