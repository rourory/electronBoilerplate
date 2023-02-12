import {applicationTitleBarActionTypes} from '../../preloadActions/preloadActionTypes' 

declare global {
   interface Window { applicationTitleBar: applicationTitleBarActionTypes; }
}