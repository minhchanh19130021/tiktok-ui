import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from "./AccountPreview";


const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div >
        )
    }
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-10, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1696808580251650.jpeg?x-expires=1662890400&x-signature=H3ozzhHv0KRIsPHCkaNbr0cO7QM%3D'
                        alt="avtar" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>lorem ipsum dolor sit amet, consectetur lorem ipsum dolor</strong>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>
                            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
                        </p>
                    </div>
                </div>
            </Tippy>
        </div >
    );
}


export default AccountItem;