import { Injectable } from '@angular/core';

interface Content {
  picture: string;
  name: string;
  status: boolean;
  flag: string;
  country: string;
  categories: string[];
  youtube: number;
  instagram: number;
  facebook: number;
}

@Injectable()
export class DataService {
  private contentList: any[];
  constructor() {
    this.contentList = [
      {
        picture: './assets/images/default-avatar.png',
        name: 'Anastasia',
        status: false,
        flag: 'fr',
        country: 'France',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 20000,
        instagram: 19000,
        facebook: 2400,
        //Below fields are just for mockups
        totalSocialFollowers: 456442,
      }, {
        picture: './assets/images/img01.png',
        name: 'Anastasia',
        status: false,
        flag: 'pk',
        country: 'pakistan',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 3000,
        instagram: 9000,
        facebook: 800,
        totalSocialFollowers: 54183468
      }, {
        picture: './assets/images/default-avatar.png',
        name: 'Anastasia',
        status: true,
        flag: 'gb',
        country: 'united kigdom',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 8000,
        instagram: 50000,
        facebook: 80,
        totalSocialFollowers: 4516456
      }, {
        picture: './assets/images/img01.png',
        name: 'Anastasia',
        status: true,
        flag: 'at',
        country: 'Austria',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 250,
        instagram: 900,
        facebook: 800,
        totalSocialFollowers: 48664864
      }, {
        picture: './assets/images/default-avatar.png',
        name: 'Anastasia',
        status: false,
        flag: 'au',
        country: 'Australia',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 600,
        instagram: 800,
        facebook: 600,
        totalSocialFollowers: 8468401
      }, {
        picture: './assets/images/img01.png',
        name: 'Anastasia',
        status: false,
        flag: 'br',
        country: 'Brazil',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 200000,
        instagram: 19000,
        facebook: 24000,
        totalSocialFollowers: 894847,
      }, {
        picture: './assets/images/default-avatar.png',
        name: 'Anastasia',
        status: false,
        flag: 'cu',
        country: 'Cuba',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 200031,
        instagram: 156410,
        facebook: 45030,
        totalSocialFollowers: 858668640
      }, {
        picture: './assets/images/img01.png',
        name: 'Anastasia',
        status: true,
        flag: 'cy',
        country: 'Cyprus',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 403545,
        instagram: 50345,
        facebook: 514342,
        totalSocialFollowers: 1056465
      }, {
        picture: './assets/images/default-avatar.png',
        name: 'Anastasia',
        status: false,
        flag: 'nz',
        country: 'New Zealand',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 504320,
        instagram: 1320,
        facebook: 10052,
        totalSocialFollowers: 3048446
      }, {
        picture: './assets/images/img01.png',
        name: 'Anastasia',
        status: false,
        flag: 'sg',
        country: 'Singapore',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 49604,
        instagram: 564064,
        facebook: 84066,
        totalSocialFollowers: 4804864
      }, {
        picture: './assets/images/default-avatar.png',
        name: 'Anastasia',
        status: true,
        flag: 'us',
        country: 'United States of America',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 864044,
        instagram: 86548,
        facebook: 840,
        totalSocialFollowers: 840464
      }, {
        picture: './assets/images/img01.png',
        name: 'Anastasia',
        status: false,
        flag: 'ua',
        country: 'Ukraine',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 854806,
        instagram: 56046,
        facebook: 45463,
        totalSocialFollowers: 864866
      }, {
        picture: './assets/images/default-avatar.png',
        name: 'Anastasia',
        status: false,
        flag: 'pt',
        country: 'Portugal',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 351031,
        instagram: 88969,
        facebook: 99740,
        totalSocialFollowers: 4564642
      }, {
        picture: './assets/images/img01.png',
        name: 'Anastasia',
        status: false,
        flag: 'pl',
        country: 'Poland',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 4646,
        instagram: 456416,
        facebook: 456406,
        totalSocialFollowers: 9408644
      }, {
        picture: './assets/images/default-avatar.png',
        name: 'Anastasia',
        status: false,
        flag: 'pu',
        country: 'Peru',
        categories: ['Artist', 'Beauty', 'Food'],
        youtube: 501563,
        instagram: 450656,
        facebook: 5406,
        totalSocialFollowers: 45646425
      }
    ];
  }

  getContentList() {
    return this.contentList;
  }
}
