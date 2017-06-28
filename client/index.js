import scrollTo from './components/core/scrollTo';

const topDivs = document.querySelectorAll('.demo-cell');

// Array.from(topDivs).forEach(topDiv => topDiv.classList.remove('selected'));

Array.from(topDivs).forEach((topDiv) => {
  topDiv.addEventListener('click', () => {
    const id = topDiv.id;
    const topDivYPos = document.querySelector('#card-div-container').offsetTop;
    const viewportHeight = document.documentElement.clientHeight;
    // yPos is position of card within timeline-card-container + position of the timeline-card-container. then subtract half height of screen to capture waypoint (and a tiny bit more to capture waypoint)
    const yPos = document.querySelector(`#card-${id}`).offsetTop + (((viewportHeight/2) + topDivYPos));
    scrollTo(yPos, 500);


  });
});

const buttonz = document.querySelectorAll('.buttons-dood');
Array.from(buttonz).forEach((button) => {
  button.addEventListener('click', () => {
    const topYPos = document.querySelector('#fed-heds').offsetTop;
    console.log(topYPos)
    scrollTo(topYPos, 500);
  })
})