import ImageUpload from './components/ImageUpload';
import UserInfo from './components/UserInfo';

const Profile = () => {
  /* NOTE : 25/09/19 작업 | 프로필 */
  return (
    <div className='flex flex-col max-w-[506px] m-auto items-center'>
      <div className='flex gap-4'>
        <ImageUpload />
      </div>
      <div className='mt-8 px-6 py-4 '>
        <UserInfo />
      </div>
    </div>
  );
};
export default Profile;
