import React from 'react'
import Image from 'next/image'

export interface ColumnItemFeatureProps {
  desc1?: string;
  desc2: string;
}

export default function ColumnItemFeature(props: ColumnItemFeatureProps) {
  const {
    desc1, desc2
  } = props;

  return (
    <div className='row'>
      <div className='col-1'>
        <div className='position-relative'>
          <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
          <img />
        </div>
      </div>
      <div className='col'>
        <div className='position-relative'>
          <p className='color-palette-1'><span className='fw-semibold'>
            {desc1} &nbsp;
          </span>
            {desc2}
          </p>
        </div>
      </div>
    </div>
  )
}
