import React from 'react';
import styled from 'styled-components';

const Video = () => {
    return (
        <StyledVideoSection>
            <div class="embed-responsive embed-responsive-21by9 video-wrapper">
                <iframe 
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/v1CInj-kUf0" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </StyledVideoSection>
  );
};

export default Video;

const StyledVideoSection = styled.div`
  width: 100%;
  height: 100%;

  .video-wrapper {
    position: relative; 
    padding-bottom: 56.25%; /* 16:9 */  
    padding-top: 25px;

    iframe {
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%;
    }

  }
`;