import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from '../Image/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                src={data.avatar}
                alt={data.avatar} />
            <div className={cx("info")}>

                <h4 className={cx("search-name")}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon className={cx("check")} icon={faCircleCheck}></FontAwesomeIcon>
                    )}
                </h4>
                <p className={cx("search-username")}>{data.nickname}</p>
            </div>
        </Link>
    )
}

export default AccountItem