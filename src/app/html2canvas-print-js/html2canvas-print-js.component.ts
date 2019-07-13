// @ts-ignore
import printJS from 'print-js';
import html2canvas from 'html2canvas';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

export interface IPeriodicElement {
  name: string;
  weight: number;
  symbol: string;
  position: number;
}

/**
 * Mock data for the table
 */
const ELEMENT_DATA: IPeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-html2canvas-print-js',
  templateUrl: './html2canvas-print-js.component.html',
  styleUrls: ['./html2canvas-print-js.component.scss'],
  animations: [
    trigger('animationOptionTable', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1})),
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0})),
        ]),
      ],
    ),
    trigger('animationOptionCanvas', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1})),
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0})),
        ]),
      ],
    ),
  ],
})

export class Html2canvasPrintJsComponent {
  public canvas: ElementRef;
  public ifTable: boolean = false;
  public ifCanvas: boolean = true;
  public dataSource = ELEMENT_DATA;
  public labelPosition = 'ifCanvas';
  public context: CanvasRenderingContext2D;
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  // @ts-ignore
  @ViewChild('canvas') set content(canvas: ElementRef) {
    if (canvas) {
      this.canvas = canvas;
      if (canvas.nativeElement) {
        this.context = (canvas.nativeElement as HTMLCanvasElement).getContext('2d');
        this.draw();
      }
    }
  }

  public printTable() {

    /**
     * Convent html into image
     *
     * Look at the
     * {@Link https://github.com/niklasvh/html2canvas}
     */
    html2canvas(document.querySelector('#table')).then(async (canvas: HTMLCanvasElement) => {
      const toImg = canvas.toDataURL();

      /**
       * Print image
       *
       * Look at the
       * {@Link https://github.com/crabbly/print.js}
       */
      printJS({printable: `${toImg}`, type: 'image', imageStyle: 'width:100%'});
    });
  }

  public printCanvas() {

    /**
     * Convent html into image
     *
     * Look at the
     * {@Link https://github.com/niklasvh/html2canvas}
     */
    html2canvas(document.querySelector('#canvas')).then(async (canvas: HTMLCanvasElement) => {
      const toImg = canvas.toDataURL();

      /**
       * Print image
       *
       * Look at the
       * {@Link https://github.com/crabbly/print.js}
       */
      printJS({printable: `${toImg}`, type: 'image', imageStyle: 'width:30%'});
    });
  }

  /**
   * Draw canvas
   */
  private draw() {
    this.context.font = '30px Arial';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';

    const x = (this.canvas.nativeElement as HTMLCanvasElement).width / 2;
    const y = (this.canvas.nativeElement as HTMLCanvasElement).height / 2;
    this.context.fillText('@sezmars', x, y);
  }
}
