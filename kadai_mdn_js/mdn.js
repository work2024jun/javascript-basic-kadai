const newDate = () => {
  let timeNow = new Date();
  let Year = timeNow.getFullYear();
  let Month = timeNow.getMonth() +1;
  let Day = timeNow.getDate();
  let time = `${Year}年${Month}月${Day}日`;
  console.log(time);
}

newDate();