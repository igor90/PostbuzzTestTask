import angular from 'angular';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { SearchWrapperComponent } from './search-wrapper/search-wrapper.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

export default angular.module('app.components', [])
.component('dateWrapper', DateWrapperComponent)
.component('dateSelector', DateSelectorComponent)
.component('searchWrapper', SearchWrapperComponent)
.component('searchResults', SearchResultsComponent)
.component('autocomplete', AutocompleteComponent)
.name;
