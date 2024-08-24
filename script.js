// Your code here.
    const itemsContainer = document.querySelector('.items');
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    itemsContainer.addEventListener('mousedown', (event) => {
      isDragging = true;
      startX = event.clientX;
      scrollLeft = itemsContainer.scrollLeft;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    document.addEventListener('mousemove', (event) => {
      if (!isDragging) return;

      const   
 deltaX = event.clientX - startX;
      itemsContainer.scrollLeft = scrollLeft - deltaX;
    });