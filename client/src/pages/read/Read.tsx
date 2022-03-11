import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

interface letterInfo {
  id: number;
  title: string;
  contents: string;
}

const Read: FC = () => {
  const [letterInfo, setLetterInfo] = useState<letterInfo>();

  useEffect(() => {
    const getLetterInfo = () => {
      axios.get('/data/letterInfo.json').then((res) => {
        setLetterInfo(res.data.letterInfo[0]);
        console.log(res.data.letterInfo);
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
