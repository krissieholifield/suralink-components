import React from 'react';
import PropTypes from 'prop-types';

import {
  List as AntList,
  Typography,
} from 'antd'; // eslint-disable-line

// Styles
import styles from './List.module.css';

/**
 * The only true List component
 * @param {string} title The title of HelloWorld
 */
const List = ({ data }) => (
  <AntList
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    bordered
    dataSource={data}
    renderItem={(item) => (
      <AntList.Item extra={item.extra} actions={item.actions}>
        <Typography.Text mark />
        {' '}
        <div className={styles.itemDescription}>{item.description}</div>
      </AntList.Item>
    )}
  />
);

List.propTypes = {
  /**
   * Data array
   */
  data: PropTypes.array.isRequired, // eslint-disable-line
};

export default List;
