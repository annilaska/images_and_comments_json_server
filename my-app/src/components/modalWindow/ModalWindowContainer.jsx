import React from "react";
import Preloader from "../preloader/Preloader";
import { setCard, load, setComment, getCard, updateComments } from '../../redux/ModalWindowReducer';
import { connect } from 'react-redux';
import ModalWindow from "./ModalWindow";
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { useNavigate } from 'react-router-dom';

class ModalWindowContainer extends React.Component {


    componentDidMount() {

        let imageId = this.props.router.params.imageId;
        this.props.getCard(imageId)

    }



    render() {
        return <>
            {this.props.isloading ? <Preloader /> : null}
            <ModalWindow {...this.props} />
        </>
    }
}


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        
        let navigate = useNavigate();
        let params = useParams();
        
        return (
            <Component
           
                {...props}
                router={{ params }}
                navigate={ navigate }
            />
        );
    }

    return ComponentWithRouterProp;
}


let mapStateToProps = (state) => ({
        
        id: state.ModalWindow.id,
        url: state.ModalWindow.url,
        comments: state.ModalWindow.comments,
        isloading: state.ModalWindow.isloading,
        
});

export default compose(
    connect(mapStateToProps, { setCard, load, setComment, getCard, updateComments }),
    withRouter
    )(ModalWindowContainer);