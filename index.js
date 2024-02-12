const Notification = (props) => {
  const { class, text, img } = props;
  return (
    <div className={class}>
      <img src={img} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="notifis">
      <Notification
        className="b"
        img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="g"
        img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="success Message"
      />
      <Notification
        className="y"
        img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="warning Message"
      />
      <Notification
        className="r"
        img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
