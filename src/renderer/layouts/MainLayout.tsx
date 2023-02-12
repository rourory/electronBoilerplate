import { Outlet } from 'react-router-dom';
import SvgCloseIcon from '../icons/CloseIcon';
import SvgMaximizeIcon from '../icons/MaximizeIcon';
import SvgMinimizeIcon from '../icons/MinimizeIcon';
import styles from './Layout.module.scss';

const MainLayout = () => {
   return (
      <>
         <div className={styles.topBar}>
            <div className={styles.leftWrapper}>
               <h1>App title</h1>
            </div>
            <div className={styles.draggable} />
            <div className={styles.rightWrapper}>
               <div className={styles.iconBox}>
                  <div
                     className={styles.icon}
                     onClick={() => {
                        window.applicationTitleBar.hide();
                     }}>
                     <SvgMinimizeIcon />
                  </div>
                  <div
                     className={styles.icon}
                     onClick={() => window.applicationTitleBar.maximize()}>
                     <SvgMaximizeIcon />
                  </div>
                  <div className={styles.icon} onClick={() => window.applicationTitleBar.close()}>
                     <SvgCloseIcon />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.appContainer}>
            <Outlet />
         </div>
      </>
   );
};

export default MainLayout;
