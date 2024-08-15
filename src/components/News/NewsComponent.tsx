"use client"; 

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../features/store';
import { fetchNews } from '../../features/newsSlice';

const NewsComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const news = useSelector((state: RootState) => state.news.data);
  const status = useSelector((state: RootState) => state.news.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [dispatch, status]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && news.map((newsItem) => (
        <div key={newsItem.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{newsItem.title}</h3>
          <p className="mt-2 text-gray-700">{newsItem.content}</p>
        </div>
      ))}
      {status === 'failed' && <p>Error loading news.</p>}
    </div>
  );
};

export default NewsComponent;
