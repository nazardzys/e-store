import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { ICollectionItem } from '../../interfaces/collectionItem';
import './collection-preview.styles.scss';

type Props = {
  items: ICollectionItem[];
  routeName: string;
  title: string;
};

const CollectionPreview: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toLocaleUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
