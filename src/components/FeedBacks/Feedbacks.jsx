import PropTypes from 'prop-types';
import styles from '../FeedBacks/Feedbacks.module.css';

 const  Feedbacks = ({ buttonIncrement }) => {
    return (<div className={styles.container}>
        <button className={styles.button} type='button' name='good' onClick={buttonIncrement}>Good</button>
        <button className={styles.button} type='button' name='neutral' onClick={buttonIncrement}>Neutral</button>
        <button className={styles.button} type='button' name='bad' onClick={buttonIncrement}>Bad</button>
    </div>)
}
Feedbacks.propTypes = {
    buttonIncrement:PropTypes.func.isRequired,
}

export default Feedbacks