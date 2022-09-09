import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "~/components/Button/Button";
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to="123">
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1696808580251650.jpeg?x-expires=1662890400&x-signature=H3ozzhHv0KRIsPHCkaNbr0cO7QM%3D"
                        alt="" />
                </Link>
                <Button primary>Theo dõi</Button>
            </div>
            <div className={cx('body')}>
                <Link to='ss' className={cx('nickname')}>
                    <strong>
                        lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
                    </strong>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle} />
                </Link>
                <Link to="123" className={cx('name')}>
                    lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
                </Link>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>6.2M</strong>
                    <span className={cx('label')}>Theo dõi</span>
                    <strong className={cx('value')}>6.2M</strong>
                    <span className={cx('label')}>Lượt thích</span>
                </p>
            </div>

        </div>
    );
}

export default AccountPreview;