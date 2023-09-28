import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;
const ItemListContainer = ( { hoverable, style, cover, title, description , producto}) => {
  return (
    <Card
      hoverable={hoverable}
      style={style}
      cover={cover}
    >
      <Meta title={title} description={description} producto={producto} />
    </Card>

  )
}

export default ItemListContainer