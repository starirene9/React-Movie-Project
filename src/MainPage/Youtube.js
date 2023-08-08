import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YouTubeVideo() {
  const [videoData, setVideoData] = useState(null);

  const videoId = 'YOUR_VIDEO_ID'; // 실제 동영상 ID로 대체해야 함
  const apiKey = 'YOUR_API_KEY'; // 생성한 API 키로 대체해야 함

  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
      params: {
        part: 'snippet',
        id: videoId,
        key: apiKey,
      },
    })
    .then(response => {
      setVideoData(response.data.items[0].snippet);
    })
    .catch(error => {
      console.error('Error fetching video data:', error);
    });
  }, []);

  if (!videoData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{videoData.title}</h1>
      <p>{videoData.description}</p>
      {/* 여기에 동영상 정보를 표시하는 JSX를 추가할 수 있습니다 */}
    </div>
  );
}

export default YouTubeVideo;
