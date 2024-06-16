import { CountryFlagRenderer } from '../CountryFlagRenderer';
import { ICellRendererParams } from '@ag-grid-community/core';

describe('CountryFlagRenderer', () => {
  let params: ICellRendererParams;

  beforeEach(() => {
    params = {
      data: {
        flags: {
          svg: 'https://example.com/flag.svg',
        },
      },
    } as ICellRendererParams;
  });

  it('should create an instance of CountryFlagRenderer', () => {
    const renderer = new CountryFlagRenderer();
    expect(renderer).toBeInstanceOf(CountryFlagRenderer);
  });

  it('should return the correct GUI element', () => {
    const renderer = new CountryFlagRenderer();
    renderer.init(params);

    const eGui = renderer.getGui();
    expect(eGui).toBeInstanceOf(HTMLSpanElement);
    expect(eGui).toHaveClass('imgSpanLogo');
    expect(eGui.querySelector('img')).not.toBeNull();
  });

  it('should not refresh the cell', () => {
    const renderer = new CountryFlagRenderer();
    const result = renderer.refresh(params);
    expect(result).toBe(false);
  });
});
