export const timestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return `${date.toLocaleDateString()} at ${formatTime(date)}`;
};

formatTime = (date_obj) => {
  // formats a javascript Date object into a 12h AM/PM time string
  let hour = date_obj.getHours();
  let minute = date_obj.getMinutes();
  const amPM = hour > 11 ? 'PM' : 'AM';
  if (hour > 12) {
    hour -= 12;
  } else if (hour == 0) {
    hour = '12';
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${hour}:${minute}${amPM}`;
};
export const findById = function (tree, testID) {
  if (tree.props && tree.props.testID === testID) {
    return tree;
  }
  if (tree.children && tree.children.length > 0) {
    const childs = tree.children;
    for (let i = 0; i < childs.length; i++) {
      const item = findById(childs[i], testID);
      if (typeof item !== 'undefined') {
        return item;
      }
    }
  }
};
