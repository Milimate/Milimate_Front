import { useNavigate } from "react-router-dom";
import constants from "../../constants";
import * as Styled from "./LoginPage.style";

function LoginPage() {
  const navigate = useNavigate();

  const tempLogin = () => {
    navigate("/todo");
  };

  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  };

  const googleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile`;
  };

  const appleLogin = () => {
    window.alert("Apple Login");
  };

  return (
    <Styled.Container>
      <Styled.LogoImg src={constants.LOGO} alt="logo" />
      <Styled.LogoText>당신의 목표 가이드, 마이플랜잇</Styled.LogoText>

      <Styled.ButtonContainer>
        <Styled.LoginButton
          src="/images/kakao_login.png"
          alt="kakaoLogin"
          onClick={tempLogin}
        />
        <Styled.LoginButton
          src="/images/google_login.png"
          alt="googleLogin"
          onClick={tempLogin}
        />
        <Styled.LoginButton
          src="/images/apple_login.png"
          alt="applelogin"
          onClick={tempLogin}
        />
      </Styled.ButtonContainer>
    </Styled.Container>
  );
}

export default LoginPage;
