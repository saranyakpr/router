import React from 'react';
import {useSearchParams} from 'react-router-dom'

const Detail = () => {

const [searchparam] = useSearchParams();
console.log('searchparam', searchparam)

  return (
    <div>Detail</div>
  )
}

export default Detail