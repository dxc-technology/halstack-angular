import { render } from '@testing-library/angular'
import { DxcButtonComponent } from './dxc-button.component'

describe('DxcButton', () => {
  test('should render dxc-button', async () => {
    const { getByText } = await render(DxcButtonComponent, {
      componentProperties: { label: "test-button" },
    })

    expect(getByText("test-button"))
  })

})