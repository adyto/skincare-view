import Image from 'next/image'

export interface ColumnProps {
  desc1: string
}

export default function Column(props: ColumnProps) {
  const { desc1 } = props

  return (
    <div className='row'>
      <div className='col-1'>
        <div className='position-relative'>
          <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
        </div>
      </div>
      <div className='col'>
        <div className='position-relative'>
          <p className='color-palette-1 text-lg'>{desc1}</p>
        </div>
      </div>
    </div>
  )
}
