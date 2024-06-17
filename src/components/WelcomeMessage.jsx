const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <>
      <center className="welcomemessage">
        <div>
          <h1>Nothing Post Yet 😊😊!!</h1>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onGetPostClick}
        >
          Get others post form server
        </button>
      </center>
    </>
  );
};
export default WelcomeMessage;
