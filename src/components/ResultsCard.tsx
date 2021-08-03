import React from 'react'

type ResultsCardProps = {
  numbers: string;
  data: string;
}

export default function ResultsCard(props: ResultsCardProps) {
  return (
    <div className="flex flex-col gap-4 w-3/4 text-center mx-auto">
      <h3 className="base-title">{props.numbers}</h3>
      <p className="base-description">{props.data}</p>
    </div>
  )
}
