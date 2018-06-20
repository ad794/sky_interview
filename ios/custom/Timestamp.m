//
//  Timestamp.m
//  reactNativeInterview
//
//  Created by Adnan Babar on 17/06/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "Timestamp.h"
#import <React/RCTLog.h>

@implementation Timestamp

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getTimestamp:(NSString *)date
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
  [dateFormatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ssZ"];
  NSDate *convertedDate = [dateFormatter dateFromString:date];

  NSTimeInterval timeStamp = [convertedDate timeIntervalSince1970];
  NSNumber *timeStampObj = [NSNumber numberWithDouble: timeStamp];
  
  if (timeStampObj) {
    resolve(timeStampObj);
  } else {
     reject(@"get_error", @"Error getting timestamp", nil);
  }
}

@end
