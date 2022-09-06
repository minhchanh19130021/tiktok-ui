import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2dbb398ac36c1b925d01ac022306b79f~c5_100x100.jpeg?x-expires=1662181200&x-signature=oQUge72bA8hX0iyAoxcLWxFxxkU%3D"
                alt=""/>
            <div className={cx("info")}>

                <h4 className={cx("search-name")}>
                    <span>Kiều My</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCircleCheck}></FontAwesomeIcon>

                </h4>

                <p className={cx("search-username")}> Nguyễn Thị Kiều My Nguyễn Thị Kiều My Nguyễn Thị Kiều My</p>
            </div>
        </div>
    )
}

export default AccountItem