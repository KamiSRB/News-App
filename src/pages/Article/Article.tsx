import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ArticleComponent from '../../components/Article';
import { NewsApplicationContext } from '../../context/newsAppContext';
import { Article } from '../../types/Article.types';

interface RouteParams {
  title: string;
}

const ArticlePage: React.FC = () => {
  const [article, setArticle] = useState<Article>();
  const { selectedArticle } = useContext(NewsApplicationContext);
  const params = useParams<RouteParams>();
  const history = useHistory();

  // Some caching mechanism would be great here
  useEffect(() => {
    if (selectedArticle) {
      setArticle(selectedArticle);
      return;
    }

    history.push('/');

    // The API can't retrieve the exact article.
    // For now, the only way to achieve that is to retrieve all and find it manually
    // getArticle(params.title)
    //   .then(setArticle)
    //   .catch(() => {
    //     history.push('/');
    //   });
  }, [history, params.title, selectedArticle]);

  return article ? (
    <ArticleComponent
      title={article.title}
      imageSrc={article.urlToImage}
      description={article.description}
      content={article.content}
    />
  ) : (
    <></>
  );
};

export default ArticlePage;
