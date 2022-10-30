import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section className="Section">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
