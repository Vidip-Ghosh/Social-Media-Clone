import React,{useRef,useState} from 'react';
import './UploadVideo.css'
export default function VideoInput(props)
{
    const {width,height} = props;
    const inputRef = useRef();
    const [source,setSource] = useState();

    const handleFileChange = (event) =>{
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    };
    const handleChoose = (event) =>{
        inputRef.current.click();
    };
    return (
        <div className="VideoInput">
            <input ref={inputRef} className="VideoInput_Input" type="file" onChange={handleFileChange} accept=".mov,.mp4"/>
            {!source && <button className="btn btn-success" onClick={handleChoose}>Choose Video</button>}
            {source && (
                <video className="VideoInput_Video" width="100%" src={source} height={height} controls></video>
            )}
            <div className="VideoInput_footer">{source || "Nothing selected"}</div>
        </div>
    )
}