// src/components/TodoItem.jsx
import React from 'react'
import Button from './Button'

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li className="p-2 bg-gray-50 rounded-md shadow-sm flex items-center justify-between">
      <div className="flex items-center">
        {/* チェックボックスで完了状態を切り替える */}
        <input type="checkbox"
          checked={TodoItem.completed} // todo.completed の値でチェック状態を制御
          onChange={() => onToggleComplete(todo.id)} // チェックボックス変更時に親の関数を呼び出す
          className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
        />
        {/* TODOテキスト。完了していれば取り消し線 */}
        <span className={`text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      {/* 削除ボタン */}
      <Button
        onClick={() => onDelete(todo.id)} // 削除ボタンクリック時に親の関数を呼び出す
        className="bg-red-500 hover:bg-red-600 px-3 py-1 text-sm"
      >
        削除
      </Button>

    </li>
  )
}

export default TodoItem



// const TodoItem = () => {
//   return (
//     <li key={todo.id} className="p-2 bg-gray-50 rounded-md shadow-sm">
//       {todo.text}
//     </li>
//   )
// }

// export default TodoItem
