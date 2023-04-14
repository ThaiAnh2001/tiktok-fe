import { HeaderLayout } from '@/component/Layout';
import { Following, Home, Live, Upload } from '@/pages';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/live', component: Live },
    { path: '/upload', component: Upload, layout: HeaderLayout },
];

export const privateRoutes = [];
