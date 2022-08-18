import React from "react";
import Preloader from "../preloader/Preloader";
import RootPage from "./RootPage";
import { setImages, load, getImages } from '../../redux/rootReducer';
import { connect } from 'react-redux';



class RootPageContainer extends React.Component {


    componentDidMount() {

        this.props.getImages()

    }

    render() {
        return <>
            {this.props.isloading ? <Preloader /> : null}
            <RootPage {...this.props} />
        </>
    }
}





let mapStateToProps = (state) => ({
    
        imagesList: state.rootPage.imagesList,
        isloading: state.rootPage.isloading
   
});

export default connect(mapStateToProps, { setImages, load, getImages })(RootPageContainer);