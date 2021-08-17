/*
 * @Description  :
 * @Author       : BuGua
 * @Date         : 2021-08-02 15:03:17
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-11 11:41:14
 */
import styles from '../index.less'
import FliterQuery from './components/filterQuery'
const menuPage = () => {
    return (
        <div className={styles.contnet}>
            <FliterQuery />
        </div>
    );
};
export default menuPage;
