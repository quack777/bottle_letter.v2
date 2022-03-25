import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

interface letterInfo {
  id: number;
  title: string;
  contents: string;
}

const Read: FC = () => {
  const [letterInfo, setLetterInfo] = useState<letterInfo>({
    id: 1,
    title: '',
    contents: '',
  });

  const randomLetterInfoNum = (length: number): number => {
    const num = Math.floor(length * Math.random());
    return num;
  };

  useEffect(() => {
    const getLetterInfo = () => {
      axios
        .get('/data/letterInfo.json')
        .then((res) => {
          // axios.get('http://localhost:3000/letterInfo').then((res) => {
          setLetterInfo(res.data.letterInfo[randomLetterInfoNum(res.data.letterInfo.length)]);
        })
        .catch(() => {
          setLetterInfo({ id: 1, title: '안녕하세요', contents: 'ㅎㅎ' });
        });
    };
    getLetterInfo();
  }, []);

  return (
    <div>
      <input value={letterInfo?.title} readOnly />
      <textarea value={letterInfo?.contents} readOnly />
    </div>
  );
};

export default Read;
