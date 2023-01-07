import React,{Component} from 'react';
import {Form} from 'react-bootstrap'
class DisplayVideo extends Component
{
    constructor(props) {
      super(props)
    
      this.state = {
         video: null
      }
    }
    onVideoChange = event =>{
        if(event.target.files && event.target.files[0])
        {
            let vid = event.target.files[0];
            this.setState({
                video: URL.createObjectURL(vid)
            });
        }
    };
    render()
    {
        return(
            <div>
                <div>
                    <div>
                        <video src={this.state.video} alt="" />
                        <input type="file" name="myVideo" onChange={this.onVideoChange} />
                        <Form.Text className="text-muted">Upload Video</Form.Text>
                    </div>
                </div>
            </div>
        )
    }
}
export default DisplayVideo;