// src/components/Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Menu.css'; // このコンポーネント用のCSSファイル

function Menu() { // コンポーネント名を 'Menu' に変更
  return (
    <nav className="main-nav">
      <ul>
        {/*
          もし全てのページでこのナビゲーションバーを表示したい場合、
          ルートパスへのリンクは不要かもしれません。
          ただし、メニュー画面自体へのリンクとして機能させるなら含めてもOKです。
        */}
        {/* <li><Link to="/">メニュー</Link></li> */}
        <li><Link to="/register">登録</Link></li>
        <li><Link to="/list">リスト</Link></li>
        <li><Link to="/flashcard">テスト</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
