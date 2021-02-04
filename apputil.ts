  convertToDateFormatFromMilliSeconds(date: any) {
    if (date == undefined || date == null || date == '')
      return null;
    let date1 = new Date(date); // Date 2011-05-09T06:08:45.178Z
    let year1 = date1.getFullYear();
    let month1 = ("0" + (date1.getMonth() + 1)).slice(-2);
    let day1 = ("0" + date1.getDate()).slice(-2);
    return `${month1}/${day1}/${year1}`;
  }
