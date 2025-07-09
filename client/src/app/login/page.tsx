import Typography from '../components/Typography';

const Login = () => {
  return (
    <div className="flex w-full h-screen justify-center bg-[url('/assets/login-bg.jpg')] bg-cover bg-center">
      <div>
        <Typography size='2xl'>여행계획을 짤 땐? 버디요!</Typography>
      </div>
      <div>
        친구들 혹은 연인 아니면 혼자서 가는 여행 J들을 위한 계획 플랫폼!
      </div>
    </div>
  );
};

export default Login;
