var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
    type: 'CHANGE_VIDEO_LIST',
    videos: videos,
    currentVideo: videos[0]
});

export default changeVideoList;
