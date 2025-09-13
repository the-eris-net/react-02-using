import { useState } from 'react';

function Card({ title, html }) {
  return (
    <div
      style={{ border: '1px solid gray', 
        borderRadius: '8px', 
        padding: '10px' }}
    >
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

function App() {
  const inputHtmlString = `<input type="date" defaultValue="2025-09-15"/>`;

  const ulHtmlString = `<ul>
    <li>스터디 준비</li>
    <li>예제 코드 작성</li>
  </ul>`;

  return (
    <>
      <Card title="서류 제출 마감 기한" html={inputHtmlString}></Card>
      <Card title="오늘 공부 체크리스트" html={ulHtmlString}></Card>
    </>
  );
}

export default App;
