// src/components/TodoList.jsx
import React from 'react'

const TodoList = ({ todos }) => {
  return (
    <div className="text-left">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">TODOリスト:</h3>
      {todos.length === 0 ? (
        <p className="text-gray-500">TODOはまだありません。</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {todos.map(todo => (
            // 各リストアイテムには一意のkeyプロパティが必須です
            <li key={todo.id} className="p-2 bg-gray-50 rounded-md shadow-sm">
              {todo.text}
            </li>
            // <TodoItem />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList
