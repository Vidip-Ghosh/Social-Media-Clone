import React,{Component} from "react";
import {Form} from 'react-bootstrap'
class DisplayImage extends Component
{
    constructor(props) {
      super(props)
      this.state = {
         image: null
      }
    }
    onImageChange = event => {
        if(event.target.files && event.target.files[0])
        {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };
    render()
    {
        return(
            <div>
                <div>
                    <div>
                        <img src={this.state.image} alt="" />
                        <input type="file" name="myImage" onChange={this.onImageChange} />
                        <Form.Text className="text-muted">Upload Image</Form.Text>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayImage;