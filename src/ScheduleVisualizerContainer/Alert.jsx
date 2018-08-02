import React from 'react';
import PropTypes from 'prop-types';
// used styled components because it makes the interface way cleaner but it also can be done in semantic-ui-react
import styled from 'styled-components';

const Message = styled.p`
  /* And you then can extend the Message component with things like this:
  color: ${props => props.error ? '#86181d' : '#1d8618'};

  And have all the palet of colors that you decide because of the business logic*/
  color: #86181d;
  vertical-align: center;
  padding-top: 3%;
`;

const Wrapper = styled.div`
  background-color: #ffdce0;
  border: 3px solid rgba(27,31,35,0.15);
  border-radius: 5px;
  display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
  margin-top: 1em;
  padding-bottom: 0.8em;
`;


const Alert = (props) => (
  <Wrapper>
    <Message>{props.withMessage}</Message>
  </Wrapper>
);

Alert.defaultProps = {
  withMessage: "Please provide all fields before submitting"
}

// it isn't required now because we use the default as a fallback
Alert.propTypes = {
  withMessage: PropTypes.string
}


export default Alert;
