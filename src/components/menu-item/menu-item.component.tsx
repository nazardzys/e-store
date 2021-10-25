import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

type OwnProps = {
  imageUrl: string;
  linkUrl: string;
  size?: string | undefined;
  title: string;
};

type Props = OwnProps & RouteComponentProps;

const MenuItem: React.FC<Props> = (
  {
    title,
    imageUrl,
    size,
    linkUrl,
    history,
    match
  }) => {
    return (
      <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
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

export default withRouter(MenuItem);
