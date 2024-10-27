import React, { useState } from 'react';

const articles = [
  { title: 'React Hooks Tutorial', category: 'Technology', description: 'Learn how to use React hooks effectively.' },
  { title: 'Introduction to Physics', category: 'Science', description: 'Basic concepts of physics explained.' },
  { title: 'Football World Cup 2022', category: 'Sports', description: 'Recap of the latest football World Cup.' },
];

const ArticleFilterApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setKeyword('');
  };

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    const matchesKeyword = article.title.toLowerCase().includes(keyword.toLowerCase()) || 
                           article.description.toLowerCase().includes(keyword.toLowerCase());
    return matchesCategory && matchesKeyword;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Article Filter App</h2>
      <Filter 
        selectedCategory={selectedCategory} 
        keyword={keyword} 
        onCategoryChange={handleCategoryChange} 
        onKeywordChange={handleKeywordChange} 
        onClear={clearFilters} 
      />
      <ArticleList articles={filteredArticles} />
    </div>
  );
};

const Filter = ({ selectedCategory, keyword, onCategoryChange, onKeywordChange, onClear }) => (
  <div style={{ marginBottom: '20px' }}>
    <h3>Select Category</h3>
    <button onClick={() => onCategoryChange('')}>All</button>
    <button onClick={() => onCategoryChange('Technology')}>Technology</button>
    <button onClick={() => onCategoryChange('Science')}>Science</button>
    <button onClick={() => onCategoryChange('Sports')}>Sports</button>
    
    <div style={{ marginTop: '10px' }}>
      <input 
        type="text" 
        placeholder="Search by keyword" 
        value={keyword} 
        onChange={onKeywordChange} 
        style={{ marginRight: '10px' }}
      />
      <button onClick={onClear}>Clear</button>
    </div>
  </div>
);

const ArticleList = ({ articles }) => (
  <div>
    <h3>Articles</h3>
    {articles.length > 0 ? (
      articles.map((article, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <strong>{article.title}</strong>
          <p>{article.description}</p>
        </div>
      ))
    ) : (
      <p>No articles found.</p>
    )}
  </div>
);

export default ArticleFilterApp;
