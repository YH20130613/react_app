// src/pages/Step4.jsx
import React, { useState } from 'react';
import Button from '../components/Button';

const Step4 = () => {
  // 1. TODO入力欄の値を管理する状態
  const [todoText, setTodoText] = useState('');

  // 2. TODOアイテムのリストを管理する状態
  // 各TODOは { id: number, text: string } のようなオブジェクトとして保存します
  const [todos, setTodos] = useState([]);

  // 3. TODO追加時のIDを生成するためのカウンター
  // 実際にはもっと堅牢なID生成方法がありますが、学習用としてシンプルにします
  const [nextId, setNextId] = useState(0);

  // 入力欄の値が変更されたときに呼び出される関数
  const handleInputChange = (event) => {
    setTodoText(event.target.value); // 入力された値をtodoTextにセット
  };

  // TODOを追加するボタンがクリックされたときに呼び出される関数
  const handleAddTodo = () => {
    // todoTextが空の場合は追加しない
    if (todoText.trim() === '') {
      alert('TODOを入力してください。');
      return;
    }

    // 新しいTODOアイテムを作成
    const newTodo = {
      id: nextId, // 現在のnextIdをIDとして使用
      text: todoText, // todoTextを入力されたテキストとして使用
    };

    // todosリストに新しいTODOを追加
    // 既存のtodos配列にnewTodoを追加した新しい配列を作成してsetTodosで更新
    setTodos([...todos, newTodo]);

    // 入力欄をクリア
    setTodoText('');

    // 次のTODOのためのIDをインクリメント
    setNextId(prevId => prevId + 1);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full text-center">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Step-4: シンプルTODOアプリ1</h2>
      <p className="text-gray-700 mb-4">TODO追加とリスト表示</p>

      {/* TODO入力と追加ボタン */}
      <div className="flex mb-6 space-x-2">
        <input
          type="text"
          value={todoText} // inputの値をtodoText状態と紐付ける (制御コンポーネント)
          onChange={handleInputChange} // 入力変更時にhandleInputChangeを呼び出す
          placeholder="新しいTODOを入力..."
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <Button onClick={handleAddTodo} className="bg-purple-500 hover:bg-purple-600">
          追加
        </Button>
      </div>

      {/* TODOリストの表示 */}
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
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Step4;
