import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import styles from './Sidebar.module.scss';
import { FollowIcon, HomeIcon, LiveIcon } from '~/components/Icon';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <div className={cx('menu')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />} />
                <MenuItem
                    title="Đang theo dõi"
                    to={config.routes.following}
                    icon={<FollowIcon />} />
                <MenuItem
                    title="Trực tiếp"
                    to={config.routes.live}
                    icon={<LiveIcon />} />
            </Menu>
        </div>
        <SuggestedAccounts
            label='Tài khoản được đề xuất' />
        <SuggestedAccounts
            label='Đang theo dõi' />
    </aside>
}

export default Sidebar