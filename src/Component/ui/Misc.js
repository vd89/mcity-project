import React from 'react'
import { Link } from 'react-router-dom'

export const Tag = (props) => {
  const template = <div
    style={{
      color: props.color,
      background: props.bck,
      fontSize: props.size,
      padding: '5px 10px',
      display: 'inline-block',
      fontFamily: 'Righteous',
      ...props.add
    }}
  >
    {props.children}</div>
  if (props.link) {
    return (
      <Link to={props.linkto}>
        {template}
      </Link>
    )
  } else {
    return template
  }
}

export const firebaseLoop = (snapshot) => {
  let data = []
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    })
  });

  return data
}

export const reverseArray = (actureArray) => {
  let reverseArray = []
  for (let i = actureArray.length - 1; i >= 0; i--) {
    reverseArray.push(actureArray[i])
  }

  return reverseArray
}


export const validate = (element) => {
  let error = [true, '']
  if (element.validate.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? 'Must be a Valid email' : ''}`
    error = !valid ? [valid, message] : error
  } if (element.validate.required) {
    const valid = element.value.trim() !== ''
    const message = `${!valid ? 'This field is requited' : ''}`
    error = !valid ? [valid, message] : error
  }
  return error
}