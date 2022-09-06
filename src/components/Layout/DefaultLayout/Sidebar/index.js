import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <h1>Sidebar </h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dignissimos distinctio dolore obcaecati
            totam. Aperiam assumenda commodi consectetur deserunt, eius eligendi illo nobis, omnis quibusdam, sed
            similique vitae. Sequi, soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
            assumenda at cum dicta enim facilis harum ipsam magni obcaecati omnis quam, quas quasi ratione, repellendus
            rerum sit soluta temporibus!</h1>
    </aside>
}

export default Sidebar