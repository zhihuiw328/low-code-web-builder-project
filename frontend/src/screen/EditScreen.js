import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../component/FormContainer';

const EditScreen = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
  };
  return (
      <div>
      <ControlledCarousel />
      </div>
  )
}

export default EditScreen