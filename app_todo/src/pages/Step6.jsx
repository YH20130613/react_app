// src/pages/Step6.jsx
import React, { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoListWithActions from '../components/TodoListWithActions';


const Step6 = () => {
  //useState
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(0);

  //関数
  /* 入力欄に入力されたら */
  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };
  /* 追加ボタンがクリックされたら */
  const handleAddTodo = () => {
    if (todoText.trim() === '') {
      alert('TODOを入力してください');
      return;
    }
    /* 新しいTODOアイテムを作成 */
    const newTodo = {
      id: nextId, // 現在のnextIdをIDとして使用
      text: todoText, // todoTextを入力されたテキストとして使用
      completed: false, // 新しく追加されるTODOは未完了とする
    };
    setTodos([...todos, newTodo]); //todosリストに新しいTODOを追加
    setTodoText(''); //入力欄をクリア
    setNextId(prevId => prevId + 1); // 次のTODOのためのIDをインクリメント
  };

  // 【新しい機能：TODOを削除する関数】
  const handleDeleteTodo = (idToDelete) => {
    // 削除したいID以外のTODOだけを残して新しい配列を作成
    setTodos(todos.filter(todo => todo.id !== idToDelete));
  };

  // 【新しい機能：TODOの完了状態を切り替える関数】
  const handleToggleComplete = (idToToggle) => {
    setTodos(
      todos.map(todo =>
        todo.id === idToToggle
          ? { ...todo, completed: !todo.completed } // 該当TODOのcompletedを反転
          : todo // それ以外のTODOはそのまま
      )
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full text-center">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Step-6: シンプルTODOアプリ3</h2>
      <p className="text-gray-700 mb-4">TODO追加とリスト表示<br />(完了削除機能追加)</p>
      {/* TodoInputコンポーネントを使用し、必要なpropsを渡す */}
      <TodoInput
        todoText={todoText}
        onInputChange={handleInputChange} // 入力変更時にhandleInputChangeを呼び出す
        // 子コンポーネントでは on*** の形式が一般的
        onAddTodo={handleAddTodo}
      // 子コンポーネントでは on*** の形式が一般的
      />

      {/* TodoListWithActionsコンポーネントを使用し、必要なpropsを渡す */}
      <TodoListWithActions
        todos={todos}
        onToggleComplete={handleToggleComplete} // TodoListWithActionsに完了切り替え関数を渡す
        onDelete={handleDeleteTodo}             // TodoListWithActionsに削除関数を渡す
      />
    </div>
  );
};

export default Step6
