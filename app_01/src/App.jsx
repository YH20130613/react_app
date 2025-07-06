// src/App.jsx
import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // React Routerをインポート
import './App.css'
// 各画面のコンポーネントをインポート
import Menu from './components/Menu';
import RegisterScreen from './pages/RegisterScreen';
import WordListScreen from './pages/WordListScreen';
import FlashcardScreen from './pages/FlashcardScreen';

// 仮の単語データ (開発中はこれを使用し、後でDB連携に切り替えます)
const DUMMY_WORDS = [
  { id: 1, word: "사랑해", meaning: "愛してる・好きだよ", pronunciation: "saranghae", memorized: false, is_deleted: false, example_sentence_urls: [] },
  { id: 2, word: "잘 먹었습니다", meaning: "ご馳走様", pronunciation: "jal meogeosseumnida", memorized: false, is_deleted: false, example_sentence_urls: ["https://hanguruchan.com/2023/02/08/00002/#audio-11752-2"] },
  { id: 3, word: "잘 먹겠습니다", meaning: "いただきます", pronunciation: "jal meokgetseumnida", memorized: false, is_deleted: false, example_sentence_urls: ["https://hanguruchan.com/2023/02/08/00002/#audio-11752-10"] },
  // ...さらに多くの単語データ
];

function App() {
  // アプリケーション全体で管理する単語データ
  // ローカルストレージからの読み込みと保存を考慮
  const [words, setWords] = useState(() => {
    try {
      const storedWords = localStorage.getItem('flashcardWords');
      return storedWords ? JSON.parse(storedWords) : DUMMY_WORDS;
    } catch (error) {
      console.error("Failed to load words from localStorage:", error);
      return DUMMY_WORDS; //エラー時はダミーデータを使用
    }
  });

  // wordsステートが変更されたらローカルストレージに保存
  useEffect(() => {
    localStorage.setItem('flashcardWords', JSON.stringify(words));
  }, [words]);

  // 単語を登録する関数
  const addWord = (newWordData) => {
    const newWord = {
      id: words.length > 0 ? Math.max(...words.map(w => w.id)) + 1 : 1, // ユニークなIDを生成
      ...newWordData,
      memorized: false,
      is_deleted: false,
      example_sentence_urls: newWordData.example_sentence_urls || [] // URLがなければ空配列
    };
    setWords(prevWords => [...prevWords, newWord]);
  };

  // 単語を更新する関数 (例: memorizedの状態を切り替える、is_deletedを更新する等)
  const updateWord = (id, updatedFields) => {
    setWords(prevWords =>
      prevWords.map(word =>
        word.id === id ? { ...word, ...updatedFields } : word
      )
    );
  };

  // 単語を論理削除する関数
  const softDeleteWord = (id) => {
    updateWord(id, { is_deleted: true });
  };

  // 物理削除 (テスト用、または本当に不要になった単語の場合)
  // const deleteWordPermanently = (id) => {
  //   setWords(prevWords => prevWords.filter(word => word.id !== id));
  // };

  return (
    <Router>
      <div className="App">
        {/* Menu コンポーネントを配置 */}
        <Menu />

        {/* 各ページの内容を表示する部分 */}
        <main className="main-content">
          <Routes>
            {/* 登録画面 */}
            <Route path="/register" element={<RegisterScreen addWord={addWord} />} />

            {/* リスト画面 */}
            <Route path="/list" element={<WordListScreen words={words} updateWord={updateWord} softDeleteWord={softDeleteWord} />} />

            {/* フラッシュカード画面 */}
            <Route path="/flashcard" element={<FlashcardScreen words={words} updateWord={updateWord} />} />

            {/* 存在しないパスの場合のFallback (任意) */}
            <Route path="*" element={<h2>ページが見つかりません</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
