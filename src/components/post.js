import React from 'react'
import { useState } from 'react';




const Post = () => {
    
    const [images, setImages] = React.useState([]);
    // const [ImageUrl, setImageUrl] = useState([]);
    const [allData, setAllData] = useState([]);
    const [text, setText] = useState({
        text: ""
    });
    const [isShown, setIsShown] = useState(true);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
        setIsShown(true);
    }

    const handleChange = (event) => {
        const newText = event.target.value;
        setText({ text: newText });
    }
    const onVideoChange = (e) => {
        setImages([...e.target.files]);
        setIsShown(false)

    }
    const handleSubmit = () => {
        if (images.length < 1) return;
        const newImageUrl = [];
        images.forEach(image => newImageUrl.push(URL.createObjectURL(image)))

        // setImageUrl([...ImageUrl, newImageUrl]);
        const val = {
            text: text.text,
            ImageUrl: newImageUrl,
            isShown: isShown
        }
        setAllData([...allData, val])
        setText({text : ""});
        setImages([]);
    }
     return (

        <div className='main-feed'>
            <div className="input">
                <input type="text" placeholder="What's happening ?" className='text' name='text' value={text.text || ""} onChange={handleChange} />
            </div>
            <div className="upload m-3 d-flex justify-content-between">

                <div>
                    <label htmlFor="upload-button">
                        <>
                            <i className="fa fa-picture-o mx-3" aria-hidden="true" />
                        </>
                    </label>
                    <input type="file" multiple accept="image/*" id="upload-button" className="fa fa-picture-o mx-3" onChange={onImageChange} style={{ display: 'none' }} />
                    <label htmlFor='upload-video-button'>
                        <>
                            <i className="fa fa-video-camera mx-3" aria-hidden="true" />
                        </>
                    </label>
                    <input type="file" accept="video/*" id='upload-video-button' onChange={onVideoChange} style={{ display: 'none' }} />

                    <i className="fa fa-map-marker mx-3" aria-hidden="true"></i>
                </div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>POST</button>
                </div>

            </div>
            <div className='post-main'>

                {allData.map((imageSrc) => (
                    <>

                        <div className="post-header m-3 d-flex justify-content-between">
                            <div className="post-left d-flex align-items-center">
                                <div><img src="avatar.png" alt="" className='admin-img p-2' /></div>
                                <div>
                                    <div><h6>Naruto <br />@narutobdfdh 53h</h6></div>

                                </div>
                            </div>
                            <div className="post-right my-auto"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                        </div>
                        <div className="post-text text-left mx-4">{imageSrc.text}</div>

                        {!imageSrc.isShown && (

                            <div className="post-video"><video src={imageSrc.ImageUrl} width="100%"
                                height="100%"
                                controls ></video></div>
                        )}
                        {imageSrc.isShown && (
                            <div className="post-img"><img src={imageSrc.ImageUrl} alt="" /></div>
                        )}
                        <div className="post-footer d-flex my-3">
                            <div className='d-flex mx-4'>
                                <div><img src="message.png" alt="" className='icon mx-1' /></div><div>200</div>
                            </div>
                            <div className='d-flex mx-4'>
                                <div><i className="fa fa-retweet m-1" aria-hidden="true"></i></div><div>200</div>
                            </div>
                            <div className='d-flex mx-4'>
                                <div><i class="fa fa-heart m-1" aria-hidden="true"></i></div><div>200</div>
                            </div>
                            <div className='d-flex mx-4'>
                                <div><i className='fas fa-comment-alt m-1'></i></div><div>200</div>
                            </div>
                        </div>

                    </>
                ))}

            </div>
        </div>


    )
}

export default Post