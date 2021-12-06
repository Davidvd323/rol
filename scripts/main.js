processbar('process1',1); //to add 1%
processbar('process1',-1); //to subtract 1%
document.ids[0] = setInterval(function () { processbar('process1',.7,0); }, 5);