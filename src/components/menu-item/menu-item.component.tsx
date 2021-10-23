import React from 'react';
import './menu-item.styles.scss';

type Props = {
  title: string;
  imageUrl: string;
  size: string | undefined;
};

const MenuItem: React.FC<Props> = ({ title, imageUrl, size }) => {
    return (
      <div className={`${size} menu-item`}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
            <div className="content">
                <h1 className="title">{title.toLocaleUpperCase()}</h1>
                <span className="subtitle"></span>
            </div>
        </div>
    );
};

export default MenuItem;
