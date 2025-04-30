import LoginForm from "./LoginForm";
import "@/public/css/unlogin/login.css";

export default async function Login() {
  return (
    <div className="container backboard">
      <div id="login_title">
        <h2 id="upnl">UPnL</h2>
        <h3 id="openyourdream">- Open Your Dream</h3>
      </div>
      <div id="login" className="width80per content_horizontal">
        <div id="form_title">
          <h4>로그인</h4>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
