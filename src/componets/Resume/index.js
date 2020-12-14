import React from 'react'

const Resume = () => {
  return (
    <section className="my-5 section-container">
      <div className="my-2">

        <object data='https://drive.google.com/file/d/18MynqDzX489JtVmAh6q-bdxv1qxPY2gu/preview' type='application/pdf'
          width='600px' height='900px'>
          <a href='https://drive.google.com/file/d/18MynqDzX489JtVmAh6q-bdxv1qxPY2gu/preview' alt='My Resume'>resume</a>
        </object>

        {/* <iframe title='My Resume' src="https://drive.google.com/file/d/18MynqDzX489JtVmAh6q-bdxv1qxPY2gu/preview" width="640" height="900"></iframe> */}
      </div>
    </section>
  );
}

export default Resume;
