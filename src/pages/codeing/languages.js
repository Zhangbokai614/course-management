import { Col, Image, Row, Typography } from 'antd';

import logoPython from '../../assets/logo/python.png'
import logoJavaScript from '../../assets/logo/javascript.png'
import logoGo from '../../assets/logo/go.png'
import logoC from '../../assets/logo/c.png'
import logoDart from '../../assets/logo/dart.png'

const { Text } = Typography;

const selectLabel = (image, text) => {
  return (
    <Row
      className='select-label'
      justify='space-between'
      align='middle'
      wrap={false}
      style={{
        paddingRight: '1vw'
      }}
    >
      <Col span={8}>
        <Image
          preview={false}
          src={image}
          width='48%'
        />
      </Col>
      <Col span={16}>
        <Text className='text' ellipsis>{text}</Text>
      </Col>
    </Row>
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