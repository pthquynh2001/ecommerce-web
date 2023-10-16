import React from 'react';
import SingleArticle from '../../components/SingleArticle';
import { useParams } from 'react-router-dom';

const ArticleContent = () => {
  const { id } = useParams();

  return (
    <div style={{ marginTop: '100px' }}>
      <SingleArticle id={id}></SingleArticle>
    </div>
  );
};

export default ArticleContent;
