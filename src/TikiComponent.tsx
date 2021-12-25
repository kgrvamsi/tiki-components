import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const TikiComponent = ({ text }: Props) => {
  return <div className={styles.test}>Tiki Component 1: {text}</div>
}
