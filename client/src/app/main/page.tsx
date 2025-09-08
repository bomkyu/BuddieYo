import Link from 'next/link';
import Card from '../components/cardView/Card';
import TabItem from '../components/tab/components/TabItem';
import Tab from '../components/tab/Tab';
import Typography from '../components/Typography';

/* NOTE : 25/09/03 작업 | 메인페이지 */

const Main = () => {
  return (
    <div className='flex flex-col pt-15'>
      <div className='flex-1'>
        <Typography size='lg' className='text-gray-500'>
          환영합니다 @@@님!
        </Typography>
        <Typography weight='bold' size='4xl' className='mt-6'>
          예정된 일정이 X개 있어요!
        </Typography>

        <div className='mt-4'>
          <Tab>
            <TabItem>전체</TabItem>
            <TabItem>예정된 여행</TabItem>
            <TabItem>지난 여행</TabItem>
          </Tab>
        </div>
      </div>
      <div className='flex w-full flex-wrap gap-4 mt-8'>
        <Link href={'/trips/0'}>
          <Card />
        </Link>
      </div>
    </div>
  );
};

export default Main;
