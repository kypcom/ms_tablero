import { Injectable } from '@angular/core';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Injectable()
export class GCsvService {

  constructor() { }





  generate(data, name) {


    let content = [];
    let headers;
    for (let dta of data) {
      if (dta.length > 0) {

        for (let row of dta) {
          headers = Object.keys(row);
          content.push(row);
        }
      }
    }

    let options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',

      useBom: true,
      headers: headers
    };

    new Angular5Csv(content, name, options);
  }

}
