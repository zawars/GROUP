import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
  data;
  results;
  resultsGross;
  claimsGross;
  claims;
  calcsGross;
  calcs;
  FCLs;
  cedants;
  general;
  override;
  profitSharing;

  constructor() {
    this.data = [
      { A: 'Membership Analysis', B: '', C: 1, D: '', E: '', F: '', G: 'Cedants' },
      { A: 'Potato', B: 'Fruit', C: 3, D: 'Other' },
      { A: 'Tomato', B: 'Vegetable', C: 3.21, D: 'Other' },
      { A: 'Sandwich', B: 'Food', C: 2, D: 'Wal-Mart' },
      { A: 'Hamburger', B: 'Food', C: 2, D: 'Wal-Mart' },
      { A: 'Grape', B: 'Fruit', C: '=Sum(C1:C5)', D: 'Sun Store' }
    ];


  }
}
