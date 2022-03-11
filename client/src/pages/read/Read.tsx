import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

interface letterInfo {
  id: number;
  title: string;
  contents: string;
}

const Read: FC = () => {
  const [letterInfo, setLetterInfo] = useState<letterInfo>();

  const randomLetterInfoNum = (length: number): number => {
    const num = Math.floor(length * Math.random());
    return num;
  };

  useEffect(() => {
    const getLetterInfo = () => {
      axios.get('/data/letterInfo.json').then((res) => {
        setLetterInfo(res.data.letterInfo[randomLetterInfoNum(res.data.letterInfo.length)]);
      });
    };
    getLetterInfo();
  }, []);

  return (
    <div>
      <input value={letterInfo?.title} />
      <textarea value={letterInfo?.contents} />
    </div>
  );
};

export default Read;
