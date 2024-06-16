import {
  ICellRendererComp,
  ICellRendererParams,
} from '@ag-grid-community/core';

export class CountryFlagRenderer implements ICellRendererComp {
  eGui!: HTMLSpanElement;

  init(params: ICellRendererParams) {
    debugger;
    let countryFlag: HTMLImageElement = document.createElement('img');
    countryFlag.src = params.data.flags.svg;
    countryFlag.setAttribute('class', 'logo');

    this.eGui = document.createElement('span');
    this.eGui.setAttribute('class', 'imgSpanLogo');
    this.eGui.appendChild(countryFlag);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
