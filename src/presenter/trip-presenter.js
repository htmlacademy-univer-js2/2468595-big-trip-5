// src/presenter/trip-presenter.js
import FiltersView from '../view/filters.js';
import SortView from '../view/sort.js';
import EventEditFormView from '../view/event-edit-form.js';
import PointView from '../view/point.js';

import { render, RenderPosition } from '../render.js';  // или '../utils/render.js' — как у тебя в проекте

export default class TripPresenter {
  constructor(tripControlsContainer, tripEventsContainer) {
    this._tripControlsContainer = tripControlsContainer;
    this._tripEventsContainer = tripEventsContainer;
    this._filtersContainer = tripControlsContainer.querySelector('.trip-controls__filters');
    this._eventsListContainer = null;
  }

  init() {
    // 1. Фильтры
    const filtersView = new FiltersView();
    this._filtersContainer.innerHTML = ''; // очищаем скрытый заголовок
    render(filtersView, this._filtersContainer, RenderPosition.BEFOREEND);

    // 2. Сортировка
    const sortView = new SortView();
    render(sortView, this._tripEventsContainer, RenderPosition.AFTERBEGIN);

    // 3. Создаём контейнер для списка событий
    let listContainer = this._tripEventsContainer.querySelector('.trip-events__list');
    if (!listContainer) {
      listContainer = document.createElement('ul');
      listContainer.classList.add('trip-events__list');
      this._tripEventsContainer.appendChild(listContainer);
    }
    this._eventsListContainer = listContainer;

    // 4. Форма редактирования — первой в списке
    const editFormView = new EventEditFormView();
    render(editFormView, this._eventsListContainer, RenderPosition.AFTERBEGIN);

    // 5. Три обычные точки маршрута
    for (let i = 0; i < 3; i++) {
      const pointView = new PointView();
      render(pointView, this._eventsListContainer, RenderPosition.BEFOREEND);
    }
  }
}
