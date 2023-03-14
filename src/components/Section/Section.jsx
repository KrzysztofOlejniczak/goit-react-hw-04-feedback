import PropTypes from 'prop-types';
import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h5 className={styles.title}>{title}</h5>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
