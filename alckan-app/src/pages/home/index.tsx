import { Button, Toast } from '@douyinfe/semi-ui';

const Home: React.FC = () => (
    <Button onClick={() => Toast.warning({ content: 'welcome' })}>Hello Semi</Button>
)

export default Home;