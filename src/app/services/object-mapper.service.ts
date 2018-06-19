import { Injectable } from '@angular/core';


@Injectable()
export class ObjectMapperService {

  public isModified = {
    generalSearch: {
      totalSocialFollowers: false,
      vertical: false,
      channelType: false,
      creatorGendor: false,
      gender: false,
      audienceAge: false,
      agePercent: false,
      audienceGender: false,
      audienceDemographic: false,
      demographicPercent: false,
      demographicViews: false,
    },
    youtube: {
      subscribers: false,
      averageViews: false,
      audienceAge: false,
      agePercent: false,
      audienceGender: false,
      genderPercent: false,
      audienceDemographic: false,
      demographicPercent: false,
      demographicViews: false,
      viewsInlastMonth: false,
      postsInLastMonth: false,
    },
    instagram: {
      followers: false,
      audienceAge: false,
      agePercent: false,
      audienceGender: false,
      genderPercent: false,
      audienceDemographic: false,
      demographicPercent: false,
      demographicViews: false,
      postsInLastMonth: false,
    },
    facebook: {
      likes: false,
      audienceAge: false,
      agePercent: false,
      audienceGender: false,
      genderPercent: false,
      audienceDemographic: false,
      demographicPercent: false,
      demographicViews: false,
      postsInLastMonth: false,
    },
    name: false,
    country: false,
  };

  constructor() { }

}
