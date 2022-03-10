import React, { FC, useState } from 'react';

const Write: FC = () => {
  const [letterInfo, setLetterInfo] = useState({
    title: '',
    contents: '',
  });

  const handleChangeContents = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLetterInfo({
      ...letterInfo,
      [name]: value,
    });
  };

  const handleLetterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(letterInfo);
    setLetterInfo({
      title: '',
      contents: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleLetterSubmit}>
        <input name="title" value={letterInfo.title} onChange={handleChangeContents} required placeholder="제목" />
        <textarea
          name="contents"
          value={letterInfo.contents}
          onChange={handleChangeContents}
          required
          placeholder="내용"
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Write;
