import './views/brief-view.js';
import './views/add-view.js';
import './views/filter-view.js';
import './views/sort-view.js';

/**
 * @type {BriefView}
 */
const briefView = document.querySelector('brief-view');

briefView.render();

/**
 * @type {AddView}
 */
const addView = document.querySelector('add-view');

addView.render();


/**
 * @type {FilterView}
 */
const filterView = document.querySelector('filter-view');

filterView.render();

/**
 * @type {SortView}
 */
const sortView = document.querySelector('sort-view');

sortView.render();
