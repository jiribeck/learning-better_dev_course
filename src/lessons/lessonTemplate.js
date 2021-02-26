import React from 'react';

export default function lessonTemplate({ history }) {
  function returnHome() {
    history.push('/');
  }

  return (
    <div className="lesson01">
      <div className="p-10">
        <button className="px-4 py-2 rounded bg-red-400" onClick={returnHome}>
          Home
        </button>
        <div className="text-center">
          <div className="text-center text-3xl font-thin">Lesson 01</div>
          <div className="py-4 text-2xl font-medium">
            Spacing w/ Margin and Padding
          </div>
          <hr />
        </div>
        <div className="lesson-code">{/* here goes lesson code */}</div>
      </div>
    </div>
  );
}
