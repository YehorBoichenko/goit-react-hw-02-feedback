import PropTypes from 'prop-types';
import styles from '../Notification/Notifications.module.css'; 

export default Notification = ({ notice }) => {
    return (
        <p className={styles.p}>{notice}</p>
    )
}

Notification.propTypes = {
    notice:PropTypes.string.isRequired,
}