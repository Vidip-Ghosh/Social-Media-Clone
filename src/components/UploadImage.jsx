import React,{Component} from "react";
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
                <img src={this.state.image} alt="" />
                <input width="100%" className="imageInput" type="file" name="myImage" onChange={this.onImageChange} />
            </div>
        )
    }
}

export default DisplayImage;
