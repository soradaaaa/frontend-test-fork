import React from 'react'

/**
 * 【問３】コンポーネント呼出し
 *
 * ボタンコンポーネント
 */
import React from 'react';
import Question_03_Component from './Question_03_Component';

export default function Question_03_Component(props) {
  return (
    <div>
      <h3>Question_03_Component</h3>
      <button>{props.button}</button>
      <span>{props.message}</span>
    </div>
  );
}