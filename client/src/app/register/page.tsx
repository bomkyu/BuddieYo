import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <div>
      <div className='flex flex-col h-screen'>
        <div className='flex flex-col h-full max-w-[480px] w-full m-auto'>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
export default Register;
