import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background, label, key } = config;
  return (
    <button style={{backgroundColor: `${background}`}} 
    onClick={() => selectNextBackground({background: background,key:key})}>
      {label}
    </button>
  )
}
export default ColourSelector;
