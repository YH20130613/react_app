// src/pages/Step5.jsx
import React, { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';


const Step5 = () => {
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
    };
    setTodos([...todos, newTodo]); //todosリストに新しいTODOを追加
    setTodoText(''); //入力欄をクリア
    setNextId(prevId => prevId + 1); // 次のTODOのためのIDをインクリメント
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full text-center">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Step-5: シンプルTODOアプリ2</h2>
      <p className="text-gray-700 mb-4">TODO追加とリスト表示<br />(componentsのネスト)</p>
      {/* TodoInputコンポーネントを使用し、必要なpropsを渡す */}
      <TodoInput
        todoText={todoText}
        onInputChange={handleInputChange} // 入力変更時にhandleInputChangeを呼び出す
        // 子コンポーネントでは on*** の形式が一般的
        onAddTodo={handleAddTodo}
      // 子コンポーネントでは on*** の形式が一般的
      />

      {/* TodoListコンポーネントを使用し、必要なpropsを渡す */}
      <TodoList
        todos={todos}
      />
      {/* 他にボタンなどを追加する場合はここに */}
    </div>
  );
};

export default Step5
