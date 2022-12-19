import { Image } from 'antd';

import logoPython from '../../assets/logo/python.png'
import logoJavaScript from '../../assets/logo/javascript.png'
import logoGo from '../../assets/logo/go.png'
import logoC from '../../assets/logo/c.png'
import logoDart from '../../assets/logo/dart.png'

const selectLabel = (image, text) => {
  return (
    <div className='select-label'>
    <Image
      src={image}
      width='10%'
    />
    <div className='select-label-text'>{text}</div>
  </div>
  )
}

const languages = [
  {
    value: 'javascript',
    label: selectLabel(logoJavaScript, 'JavaScript')
  },
  {
    value: 'python',
    label: selectLabel(logoPython, 'Python')
  },
  {
    value: 'go',
    label: selectLabel(logoGo, 'Go')
  },
  {
    value: 'c',
    label: selectLabel(logoC, 'C')
  },
  {
    value: 'dart',
    label: selectLabel(logoDart, 'Dart')
  },
];

export default languages;