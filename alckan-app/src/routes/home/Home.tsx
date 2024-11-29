import { Button, Toast } from '@douyinfe/semi-ui';

export default function Home() {
    return (
        <Button onClick={() => Toast.warning({ content: 'welcome' })}>Hello Semi</Button>
    );
}