// src/pages/FlashcardScreen.jsx
import React, { useState } from 'react';
import '../assets/css/FlashcardScreen.css';


function FlashcardScreen({ words, updateWord }) {
  // 仮の単語リストから最初の単語を表示
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = words && words.length > 0 ? words.filter(word => !word.is_deleted)[currentWordIndex] : null;
  const totalActiveWords = words ? words.filter(word => !word.is_deleted).length : 0;

  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleNextWord = () => {
    setShowAnswer(false);
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % totalActiveWords);
  };

  const handleMemorized = () => {
    if (currentWord) {
      updateWord(currentWord.id, { memorized: true });
      setShowAnswer(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % totalActiveWords);
    }
  };

  const handleNotMemorized = () => {
    setShowAnswer(false);
    // 「もう一度」のロジックは必要に応じて実装（例：現在の単語をリストの最後に追加するなど）
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % totalActiveWords);
  };

  if (!currentWord) {
    return <div>登録された単語はありません。</div>;
  }

  return (
    <div className="flashcard-container">

      <div className="card">
        <div className="word">{currentWord.word}</div>
        {showAnswer && (
          <div className="answer">
            <p>意味: {currentWord.meaning}</p>
            <p>発音: {currentWord.pronunciation}</p>
            {currentWord.example_sentence_urls && currentWord.example_sentence_urls.length > 0 && (
              <div className="examples">
                <h3>用例:</h3>
                <ul>
                  {currentWord.example_sentence_urls.map((url, index) => (
                    <li key={index}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="controls">
        <button className="btn memorized-btn" onClick={handleMemorized}>
          覚えた！
        </button>
        <button className="btn not-memorized-btn" onClick={handleNotMemorized}>
          <span role="img" aria-label="cross">❌</span> もう一度
        </button>
        <button className="btn show-answer-btn" onClick={handleShowAnswer}>
          <span role="img" aria-label="eye">👁️</span> 答えを見る
        </button>
        <button className="btn next-btn" onClick={handleNextWord}>
          次へ <span aria-hidden="true">&gt;</span>
        </button>
      </div>

      <div className="progress">
        {currentWordIndex + 1}/{totalActiveWords} words
      </div>
    </div>
  );
};

export default FlashcardScreen;
