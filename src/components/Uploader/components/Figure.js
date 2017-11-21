/**
 * Created by Aus on 2017/7/6.
 */
import React from 'react';
import classNames from 'classnames';
import { Icon } from 'antd';
const Figure = props => {
  const { status, imgUrl, dataUrl, id, onDelete } = props;
  const src = imgUrl ? imgUrl : dataUrl;

  const handleDelete = () => {
    if (onDelete) onDelete(id);
  };

  return (
    <div
      className={classNames(
        'zby-img-preview-box',
        { loading: status === 'loading' },
        { loaded: status === 'loaded' },
        { error: status === 'error' },
        { deleted: status == 'deleted' }
      )}
    >
      {src ? (
        <img
          style={{ width: '100%', height: '100%' }}
          src={src}
          onClick={() => {
            imgUrl ? window.open(imgUrl) : '';
          }}
        />
      ) : (
        <div className="uploading">
          <i className="fa fa-picture-o" />
        </div>
      )}
      {status === 'loading' ? (
        <div className="progress-text" id={`text-${id}`} />
      ) : (
        ''
      )}
      {status === 'loading' ? (
        <div className="progress" id={`progress-${id}`} />
      ) : (
        ''
      )}
      {status === 'loaded' || status === 'error' ? (
        <div className="close" onClick={handleDelete}>
          <i className="fa">x</i>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Figure;
