import React from 'react'

type ResultsCardProps = {
  numbers: string;
  data: string;
}

export default function ResultsCard(props: ResultsCardProps) {
  return (
    <div>
      <p>{props.numbers}</p>
      <p>{props.data}</p>
    </div>
  )
}
