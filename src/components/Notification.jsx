import PropTypes from 'prop-types';
import css from './App.module.css';

const Notification = ({ message }) => (
  <p className={css.notificationMessage}>{message}</p>
);

export default Notification;

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
