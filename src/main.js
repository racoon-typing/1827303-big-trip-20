import './views/brief-view.js';
import './views/add-view.js';
import './views/filter-view.js';
import './views/sort-view.js';
import './views/list-view.js';
import './views/placeholder-view.js';

import ApiService from './services/api-service.js';
import AppModel from './models/app-model.js';

import BriefPresenter from './presenters/brief-presenter.js';
import AddPresenter from './presenters/add-presenter.js';
import FilterPresentor from './presenters/filter-presentor.js';
import SortPresenter from './presenters/sort-presenter.js';
import ListPresentor from './presenters/list-presentor.js';
import PlaceholderPresenter from './presenters/placeholder-presenter.js';


window.apiService = new ApiService({authorization: 'Basic eo0w590ik29839q'});
const appModel = new AppModel();


new BriefPresenter(document.querySelector('brief-view'));
new AddPresenter(document.querySelector('add-view'));
new FilterPresentor(document.querySelector('filter-view'));
new SortPresenter(document.querySelector('sort-view'));
new ListPresentor(document.querySelector('list-view'), appModel);
new PlaceholderPresenter(document.querySelector('placeholder-view'), appModel);
