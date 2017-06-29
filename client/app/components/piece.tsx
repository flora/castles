import * as React from "react";

import Pieces from '../../../lib/pieces';

const SCALE = 20;

export module Piece {
  export interface PieceProps {
    piece: Pieces.Piece;
    x: number;
    y: number;
    rotation: number;
    selected: boolean;
    visible: boolean;
  }

  export class Piece extends React.Component<PieceProps, null> {
    render(): false | JSX.Element {
      let classNames = "piece " + (this.props.piece.type) + " " + (this.props.selected ? "selected" : "");
      let backgroundImageName = "/public/" + this.props.piece.name + ".png";
      let style = {
        left: this.props.x,
        top: this.props.y,
        height: this.props.piece.height * SCALE,
        width: this.props.piece.width * SCALE,
        visibility: this.props.visible ? "visible" : "hidden",
      };

      let innerStyle = {
        backgroundImage: 'url("' + backgroundImageName + '")',
        backgroundSize: "cover",
      }

      return (
        <div style={style}>
          <div className={classNames} style={innerStyle}>
            {this.props.piece.name}
          </div>
        </div>
      );
    }
  }

}
