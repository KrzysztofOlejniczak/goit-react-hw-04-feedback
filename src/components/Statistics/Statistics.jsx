import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={styles.list}>
      <li key={'s1'} className={styles.item}>
        Good: {good}
      </li>
      <li key={'s2'} className={styles.item}>
        Neutral: {neutral}
      </li>
      <li key={'s3'} className={styles.item}>
        Bad: {bad}
      </li>
      <li key={'s4'} className={styles.item}>
        Total: {total}
      </li>
      <li key={'s5'} className={styles.item}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
