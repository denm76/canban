export function getFooterData(data) {
  let activeTasks = 0;
  let finishedTasks = 0;

  data.forEach(element => {
    if(element.status === 'finished'){
      finishedTasks++;
    }else{
      activeTasks++;
    }
  });

  return [activeTasks, finishedTasks];
}
