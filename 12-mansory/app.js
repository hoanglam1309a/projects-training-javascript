window.addEventListener("load", function () {
  const mansoryList = document.querySelector(".mansory-list");
  const mansoryItems = Array.from(document.querySelectorAll(".mansory-item"));

  mansoryList.innerHTML = "";

  function createMansoryLayout(parentEle, numCol = 3, gap = 20) {
    //seperate column
    for (let i = 0; i < numCol; i++) {
      let newColumn = document.createElement("div");
      newColumn.classList.add("mansory-column", `mansory-column-${i}`);
      newColumn.style.width = `calc(${100 / numCol}%`;
      parentEle.append(newColumn);
    }
    const mansoryColums = Array.from(document.querySelectorAll(".mansory-column"));
    //add 1 img for once column mansory
    for (let i = 0; i < numCol; i++) {
      mansoryColums[i].append(mansoryItems[i]);
    }
    //find min height column
    for (let i = numCol; i < mansoryItems.length; i++) {
      let minHeightColumn = mansoryColums[0];
      for (let i = 0; i < mansoryColums.length; i++) {
        let column = mansoryColums[i];
        if (minHeightColumn.offsetHeight > column.offsetHeight) {
          minHeightColumn = column;
        }
      }
      mansoryItems[i].style.marginTop = `${gap}px`;
      //add img to min height column
      minHeightColumn.append(mansoryItems[i]);
    }
    mansoryList.style.gap = `${gap}px`;
    mansoryList.style.display = "flex";
  }

  createMansoryLayout(mansoryList, 4, 20);
});
