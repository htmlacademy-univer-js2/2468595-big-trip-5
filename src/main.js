//main.js
import TripPresenter from './presenter/trip-presenter.js';

const tripMain = document.querySelector('.trip-main');
const tripControls = tripMain.querySelector('.trip-controls'); // или весь .trip-main
const tripEvents = document.querySelector('.trip-events');

const tripPresenter = new TripPresenter(tripControls, tripEvents);
tripPresenter.init();
