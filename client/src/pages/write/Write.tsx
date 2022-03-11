import React, { FC, useState } from 'react';

interface letterInfo {
  title: string;
  contents: string;
}

const Write: FC = () => {
  const [letterInfo, setLetterInfo] = useState<letterInfo>({
    title: '',
    contents: '',
  });

  const handleChangeLetterContents = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <input
          name="title"
          value={letterInfo.title}
          onChange={handleChangeLetterContents}
          required
          placeholder="제목"
        />
        <textarea
          name="contents"
          value={letterInfo.contents}
          onChange={handleChangeLetterContents}
          required
          placeholder="내용"
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Write;
