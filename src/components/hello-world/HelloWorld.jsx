import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button, Card, Modal, Tooltip,
} from 'antd'; // eslint-disable-line

/**
 * The only true HelloWorld component
 * @param {string} title The title of HelloWorld
 */
const HelloWorld = ({ title }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Card>
      <Tooltip title="Tooltip title...">{title}</Tooltip>
      <br />
      <Button onClick={() => setVisible(!visible)}>Click Me</Button>
      <Modal visible={visible} onCancel={() => setVisible(!visible)}>
        Hello World!
      </Modal>
    </Card>
  );
};

HelloWorld.propTypes = {
  /**
   * The title of HelloWorld
   */
  title: PropTypes.string.isRequired,
};

export default HelloWorld;
