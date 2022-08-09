import React, {FC} from 'react';
import style from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {

    return (
        <div className={style.notFound}>
            This page is <strong>not found</strong>
        </div>
    );
};

export default NotFoundPage;