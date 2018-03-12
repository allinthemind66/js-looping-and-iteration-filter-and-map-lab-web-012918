// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver, revenue).map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, obj){
  key = Object.keys(obj)[0]
  return drivers.filter(function(driver){
    return obj[key] === driver[key]
  })
};

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(function(driver){
    return driver.name
  })
}
