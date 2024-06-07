const FeedbackPage = ({ stream }) => {
  const stopWebcam = () => {
    stream.getTracks().forEach(function (track) {
      track.stop();
    });
  };
  return (
    <div>
      <h1>Feedback Page</h1>
      <button onClick={stopWebcam}>Stop Webcam</button>
    </div>
  );
};

export default FeedbackPage;
