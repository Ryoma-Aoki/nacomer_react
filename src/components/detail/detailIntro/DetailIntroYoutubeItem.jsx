import React from 'react';

export default function DetailIntroYoutubeItem(props) {
  return (
    <tr className="introTr">
      <td className="introImg">
        <div className="youtube">
          <iframe
            src={props.url}
            className="youtubeIframe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </td>
      <td className="introDescription">
        <p>{props.description}</p>
      </td>
    </tr>
  );
}
