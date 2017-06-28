import scrollTo from './components/core/scrollTo';

const topDivs = document.querySelectorAll('.demo-cell');

// Array.from(topDivs).forEach(topDiv => topDiv.classList.remove('selected'));

Array.from(topDivs).forEach((topDiv) => {
  topDiv.addEventListener('click', () => {
    //FIGURE OUT TOPDIV.DATASET.CARDID
    const id = topDiv.id;
    console.log(topDiv, topDiv.id)
    const topDivYPos = document.querySelector('#card-div-container').offsetTop;
    console.log(topDivYPos)
    const viewportHeight = document.documentElement.clientHeight;
    // yPos is position of card within timeline-card-container + position of the timeline-card-container. then subtract half height of screen to capture waypoint (and a tiny bit more to capture waypoint)
    //IGURE OUT THE SELECTOR
    const yPos = document.querySelector(`#card-${id}`).offsetTop + (((viewportHeight/2) + topDivYPos));
    scrollTo(yPos, 500);

    //  WILL NEED TO FIGURE OUT PART BELOW FOR TEXT
    // const textDate = topDiv.querySelector('.timeline__circle__text-date').innerText;
    // gaSendEvent('timeline', 'click', textDate);
  });
});