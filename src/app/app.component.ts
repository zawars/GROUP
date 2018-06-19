import { ApiService } from './services/api-service.service';
import { UtilityService } from './services/utility.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";
import * as Excel from "@grapecity/spread-excelio";
import "@grapecity/spread-sheets-charts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // spreadBackColor = 'aliceblue';
  hostStyle = {
    width: '100%',
    height: '550px'
  };
  spreadBackColor = '#FFFFFF';
  autoGenerateColumns = true;
  data;
  columnWidth = 100;
  showSpread = true;
  private spread: GC.Spread.Sheets.Workbook;
  private excelIO;
  public savedCopies: any = [];
  backupSheet;
  price = '';

  constructor(private UtilityService: UtilityService, private apiService: ApiService) {
    // let data = JSON.parse(localStorage.getItem('sheets'));
    // if (data != undefined) {
    //   this.savedCopies = JSON.parse(JSON.stringify(data));
    // }

    this.apiService.get('/quotation').subscribe(response => {
      this.savedCopies = response;
      console.log(response)
    })

    this.data = this.UtilityService.data;
    this.excelIO = new Excel.IO();
  }

  workbookInit(args) {
    this.spread = args.spread;
    let sheet = this.spread.getActiveSheet();
    sheet.getCell(5, 2).formula("sum(c1:c5)").foreColor("blue");
    // sheet.getCell(0, 0).text("My SpreadJS Angular Project").foreColor("blue");

    //Set the number of rows and columns
    sheet.setRowCount(100, GC.Spread.Sheets.SheetArea.viewport);
    sheet.setColumnCount(20, GC.Spread.Sheets.SheetArea.viewport);

    // Overflow display is enabled.
    sheet.options.allowCellOverflow = true;
  }

  ngOnInit() {
  }

  inputChange() {
    this.showSpread = true;
    this.data = this.spread.toJSON();
    this.data.sheets.Data.data.dataTable[2][7].value = this.price;
    this.spread.fromJSON(this.data);
  }

  onFileChange(args) {
    let file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
    if (this.spread && file) {
      this.excelIO.open(file, (json) => {
        this.data = json.sheets;
        this.spread.fromJSON(json, {});
        setTimeout(() => {
          this.showSpread = true;
          alert("load successfully");
        }, 0);
      }, (error) => {
        alert('load fail');
      });
    }
  }

  saveAs() {
    setTimeout(() => {
      // this.showSpread = false;
      let copy = JSON.parse(JSON.stringify(this.data));
      this.savedCopies.push({
        name: new Date().toISOString(),
        data: this.spread.toJSON()
      });
      // localStorage.setItem('sheets', JSON.stringify(this.savedCopies));

      this.apiService.post('/quotation', {
        name: new Date().toISOString(),
        data: this.spread.toJSON()
      }).subscribe(response => {
        debugger;
        if (this.backupSheet != undefined) {
          this.data = JSON.parse(JSON.stringify(this.backupSheet.data));
        }
        // setTimeout(() => {
        //   this.showSpread = true;
        // }, 100);
      });
    }, 0);
  }

  openSheet(sheet) {
    setTimeout(() => {
      this.backupSheet = sheet;
      // this.showSpread = false;
      // this.data = [];
      this.data = JSON.parse(JSON.stringify(sheet.data));
      this.spread.fromJSON(this.data);
      // setTimeout(() => {
      //   this.showSpread = true;
      // }, 100);
    }, 0);
  }
}
