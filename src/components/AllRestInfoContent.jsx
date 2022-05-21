import React from 'react'
import RestInfoContent from './RestInfoContent';

export default function AllRestInfoContent(props) {
  return (
    <div className="contentik">
        {props.rests.map((rest, index) => {
          return <RestInfoContent key={index} rest={rest} />;
        })}
      </div>
  )
}
