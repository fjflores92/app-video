import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import '../assets/styles/Player.scss';
import { getVideoData } from '../actions';
import NotFound from '../containers/NotFound';

const Player = (props) => {
    const { playing, match, history } = props;
    const { id } = match.params;
    const videoExists = (playing && Object.keys(playing).length > 0);

    useEffect(() => {
        props.getVideoData(id);
    }, []);

    return videoExists ? (
        <section className="player">
            <video controls autoPlay>
                { playing.source && <source src={playing.source} type="video/mp4" /> }
            </video>
            <div className="player">
                <button type="button" onClick={history.goBack}>
                    Regresar
                </button>
            </div>
        </section>
    ) : <NotFound/>;
};

const mapDispatchToProps = {
    getVideoData,
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));