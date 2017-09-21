/**
 * Created by Aus on 2017/7/6.
 */
import React from 'react'
import classNames from 'classnames'

const Figure = (props) => {
    const {status, imgUrl, dataUrl, id, onDelete} = props;
    const src = imgUrl ? imgUrl : dataUrl;

    const handleDelete = () => {
        if(onDelete) onDelete(id);
    };

    return (
        <div className={classNames('zby-img-preview-box', {loading: status === 'loading'}, {loaded: status === 'loaded'}, {error: status === 'error'}, {deleted: status == 'deleted'})}>
            {src ? <img src={src} onClick={()=>{imgUrl ? window.open(imgUrl) : ''}}/> : <div className="uploading"><i className="fa fa-picture-o"></i></div>}
            {status === 'loading' ? <div className="progress-text" id={`text-${id}`}></div> : ''}
            {status === 'loading' ? <div className="progress" id={`progress-${id}`}></div> : ''}
            {status === 'loaded' || status === 'error' ? <div className="close" onClick={handleDelete}><i className="fa fa-times"></i></div> : ''}
        </div>
    )
};

export default Figure;