import React from 'react';
import PropTypes from 'prop-types';
import { Table as AntTable } from 'antd';  // eslint-disable-line

// Override ant design table styles
import './styles.css';

// eslint-disable-next-line
const Table = ({ bordered, columns, dataSource }) => (
  <>
    <AntTable
      bordered={bordered}
      className="suralink-table"
      columns={columns}
      dataSource={dataSource}
    />
  </>
);

Table.propTypes = {
  /**
   * Array of columns for table
   */
  columns: PropTypes.array.isRequired, // eslint-disable-line
  /**
   * Array of table data
   *
   * [
   *   {
   *      client_name: `Ben and Jerry's`,
   *      deletion_date: '10/29/2019',
   *   }
   * ]
   *
   * Even more details about dataSource prop
   */
  dataSource: PropTypes.array.isRequired, // eslint-disable-line
};

export default Table;
