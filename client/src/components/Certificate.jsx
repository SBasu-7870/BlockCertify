import React, { forwardRef } from 'react'
import logo from '../assets/logo.png'

import "./certificate.css"

const Certificate = forwardRef((props,ref) => {
    const { title, name, date, hash} = props;

  return (
    <div ref={ref} id="certificateDiv" className='ml-5'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className='certificate'
      width="900"
      height="650"
      id="certificate"
    >
      <rect
        x="50"
        y="25"
        rx="20"
        ry="20"
        width="810"
        height="600"
        id="border"
      />
      <text x="460" y="100" textAnchor="middle" fill="black" id="bodyTitle">
        Certificate
      </text>
      <text x="460" y="125" textAnchor="middle" fill="black" id="bodySubTitle">
        of
      </text>
      <line x1="200" y1="260" x2="720" y2="260" id="titleUnderLine" />
      <text x="460" y="250" textAnchor="middle" fill="black" id="title">
        {title}
      </text>
      <text
        x="460"
        y="300"
        textAnchor="middle"
        fill="black"
        id="subTitleHeader"
      >
        awarded to
      </text>
      <text x="460" y="400" textAnchor="middle" fill="black" id="name">
        {name}
      </text>
      <line x1="180" y1="410" x2="750" y2="410" id="titleUnderLine" />
      <text x="460" y="440" textAnchor="middle" fill="black" id="bodySubTitle">
        on
      </text>
      <text x="460" y="500" textAnchor="middle" fill="black" id="date">
        {date}
      </text>
      <line x1="370" y1="510" x2="550" y2="510" id="titleUnderLine" />
      <text x="100" y="575" textAnchor="start" fill="black" id="hash">
        ID: {hash}
      </text>
      <image
        x="720"
        y="500"
        height="80px"
        width="120px"
        id="logo"
        href={logo}
      />
      Sorry, your browser does not support inline SVG.
    </svg>
    </div>
  )
});

export default Certificate