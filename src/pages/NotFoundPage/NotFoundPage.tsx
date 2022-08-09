import React, {FC} from 'react';
import style from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {

    return (
        <div className={style.notFound}>
            <div className={style.notFound_body}>
                <div className={style.notFound_text}>
                    <span>This page is</span> <strong> not found</strong>
                </div>
                <div>
                    <button
                        onClick={() => window.history.back()}
                        className="btn">Back</button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;