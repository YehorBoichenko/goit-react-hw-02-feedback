import PropTypes from 'prop-types';
import styles from '../Notification/Notifications.module.css'; 

// eslint-disable-next-line
export default Notification = ({ message }) => {
    return (
        <p className={styles.p}>{message}</p>
    )
}

Notification.propTypes = {
    message:PropTypes.string.isRequired,
}