/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../components/Link/Link'

import styles from './styles.module.css'

function ShortInfoList({ type, data }) {
  const count = data?.length
  console.log(count)
  return (
    <div className={styles.mainContainer}>
      <p>{`${type} ${count}`}</p>
      <div className={styles.listOfCircles}>
        {!!count && (
          <>
            {Object.keys(data).map((key) => (
              <Link
                href={
                  type === 'Места'
                    ? `/places/${data[key]?._id}`
                    : `/${data[key]?._id}`
                }
              >
                <img
                  src={data[key]?.firebasePath}
                  alt='Avatar'
                  id={data[key]?._id}
                />
              </Link>
            ))}
          </>
        )}
        {count === 0 && <p>Здесть пока ничего нет</p>}
      </div>
    </div>
  )
}

ShortInfoList.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
}
export default ShortInfoList
