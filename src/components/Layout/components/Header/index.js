import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faSignOut,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { MessageBoxIcon, MessageIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from "~/config/routes";


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Anh',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'hn',
                    title: 'Tiếng Hàn',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'hn',
                    title: 'Tiếng Hàn',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'hn',
                    title: 'Tiếng Hàn',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'hn',
                    title: 'Tiếng Hàn',
                }, {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'hn',
                    title: 'Tiếng Hàn',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'hn',
                    title: 'Tiếng Hàn',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'hn',
                    title: 'Tiếng Hàn',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'hn',
                    title: 'Tiếng Hàn',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'hn',
                    title: 'Tiếng Hàn',
                }, {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'hn',
                    title: 'Tiếng Hàn',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt',
    },
];

const USER_MENU = [{
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Trang cá nhân',
    to: '/feedback'
},
{
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Xem xu',
    to: '/feedback'
},
{
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Cài đặt',
    to: '/feedback'
},
...MENU_ITEMS,
{
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Đăng xuất',
    to: '/feedback',
    separate: true
},
]
function Header() {
    const currentUser = true;


    // const handleMenuChange = (menuItem) => {
    //     switch (menuItem.type) {
    //         case 'language':
    //             // Handle change language
    //             break;
    //         default:
    //     }
    // };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('')}>
                                Tải lên
                            </Button>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <MessageBoxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Tải lên</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')}
                                src="s" alt="avatar-user"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;