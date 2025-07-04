import React from 'react'
import Button from '../components/Button';

const TodoInput = ({ todoText, onInputChange, onAddTodo }) => {
  return (
    <div className="flex mb-6 space-x-2">
      < input
        type="text"
        value={todoText} // inputの値をtodoText状態と紐付ける (制御コンポーネント)
        onChange={onInputChange} // 親から渡された関数を実行
        placeholder="新しいTODOを入力..."
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <Button onClick={onAddTodo} className="bg-purple-500 hover:bg-purple-600">
        追加
      </Button>
    </div>
  )
}

export default TodoInput
