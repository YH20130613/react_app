// src/components/TodoListWithActions.jsx
import React from 'react'
import TodoItem from './TodoItem';

// 親からtodos、そしてTodoItemに渡す関数を受け取る
const TodoListWithActions = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <div className="text-left">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">TODOリスト:<span className="text-base font-normal text-gray-800 ml-2">完了したらチェックする</span></h3>
      {todos.length === 0 ? (
        <p className="text-gray-500">TODOはまだありません。</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {todos.map(todo => (
            // 各TODOをTodoItemコンポーネントでレンダリング
            <TodoItem
              key={todo.id}// 各リストアイテムには一意のkeyプロパティが必須です
              todo={todo} // 個別のTODOオブジェクトを渡す
              onToggleComplete={onToggleComplete} // 完了切り替え関数を渡す
              onDelete={onDelete} // 削除関数を渡す
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListWithActions
