import Link from 'next/link';
import Typography from '../components/Typography';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <div
      className="flex w-full h-screen justify-center items-center bg-cover bg-center
    bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/assets/login-bg.jpg')]"
    >
      <div className='flex max-w-[1280px] w-full h-screen justify-center'>
        <div className='flex relative w-1/2 justify-center'>
          <div className='flex absolute flex-col gap-4  top-[20%]'>
            <Typography as='h1' size='5xl' className='text-white'>
              여행계획을 짤 땐? <br /> BuddieYo!
            </Typography>
            <Typography as='h2' className='text-white '>
              친구들 혹은 연인 아니면 혼자서 가는 여행
              <br />
              J들을 위한 계획 플랫폼!
            </Typography>
          </div>
        </div>
        <div className='flex w-1/2 h-full'>
          <div className='relative max-w-[420px] w-full h-full flex items-center justify-center'>
            <div
              className='relative w-full h-full bg-white rounded-lg shadow-xl p-8 ticket-form'
              style={{
                clipPath:
                  'polygon(0% 0%, 100% 0%, 100% 80%, 95% 85%, 100% 90%, 100% 100%, 0% 100%, 0% 90%, 5% 85%, 0% 80%)',
              }}
            >
              <div className='absolute top-0 left-0 right-0 h-2 bg-blue-500 rounded-t-lg'></div>
              <div className='absolute bottom-0 left-0 right-0 h-2 bg-blue-500 rounded-b-lg'></div>

              <div className='text-center mb-6 mt-[30%]'>
                <Typography
                  as='h3'
                  size='2xl'
                  className='text-gray-800 font-bold'
                >
                  BuddieYO에 오신걸 환영합니다
                </Typography>
                <Typography className='text-sm text-gray-500'>
                  여정을 시작하세요!
                </Typography>
              </div>

              <div className='border-t border-dashed border-gray-300 pt-6 mt-6 relative'>
                <div className='absolute left-0 -top-3 w-6 h-6 bg-gray-200 rounded-full -ml-3'></div>
                <div className='absolute right-0 -top-3 w-6 h-6 bg-gray-200 rounded-full -mr-3'></div>
                <LoginForm />
                <div className='mt-2 text-center text-gray-500'>
                  <Link className='text-xs' href={'/register'}>
                    회원이 아니신가요?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
